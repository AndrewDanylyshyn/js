(async () => {
  const dataA = await fetch("a.json").then(res => res.json());
  const dataB = await fetch("b.json").then(res => res.json());
  const dataC = await fetch("c.json").then(res => res.json());
  const data = getRandom(dataA, dataB, dataC);
  const gridSize = data.arr.length; 
  const initialTurns = data.moveNum; 


  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");
  document.body.appendChild(gameContainer);

  const grid = document.createElement("table");
  grid.classList.add("grid");
  gameContainer.appendChild(grid);

  
  const timerLabel = document.createElement("span");
  timerLabel.classList.add("timer-label");
  timerLabel.textContent = "Time: 00:00";
  gameContainer.appendChild(timerLabel);

  const turnsLabel = document.createElement("span");
  turnsLabel.classList.add("turns-label");
  turnsLabel.textContent = `Min Turns: ${initialTurns}`;
  gameContainer.appendChild(turnsLabel);
  
  let myTurns = 0;
  const myTurnsLabel = document.createElement("span");
  myTurnsLabel.classList.add("my-turns-label");
  myTurnsLabel.textContent = `My Turns: ${myTurns}`;
  gameContainer.appendChild(myTurnsLabel);

  
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.addEventListener("click", () => resetGame());
  gameContainer.appendChild(resetButton);

 
  let remainingTurns = initialTurns; 
  let secondsElapsed = 0; 
  let timerInterval; 
  let prevClickCoords = [-1, -1];

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("tr");
    grid.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("td");
      cell.classList.add("cell");
      cell.dataset.state = data.arr[i][j] ? "on" : "off"; 
      cell.addEventListener("click", () => handleClick(i, j));

      
      cell.style.width = "100px";
      cell.style.height = "100px";

      changeColor(cell);
      row.appendChild(cell);
    }
  }

  function getRandom(dA, dB, dC){
    let a = Math.floor(Math.random() * 3);
    if (a === 0){
        return dA;
    }
    else if (a === 1){
        return dB;
    }
    return dC;
  }

  function changeColor(cell) {
    cell.style.backgroundColor = cell.dataset.state === "on" ? "#fff" : "#000";
  }

  
  function handleClick(row, col) {
      const cell = grid.rows[row].cells[col];
      cell.dataset.state = cell.dataset.state === "on" ? "off" : "on";
      changeColor(cell);

      
      for (let i = row - 1; i <= row + 1; i++) {
        if (i >= 0 && i < gridSize) {
          const neighborCell = grid.rows[i].cells[col];
          if (neighborCell) {
            neighborCell.dataset.state = neighborCell.dataset.state === "on" ? "off" : "on";
            changeColor(neighborCell);
          }
        }
      }

      for (let j = col - 1; j <= col + 1; j++) {
        if (j >= 0 && j < gridSize) {
          const neighborCell = grid.rows[row].cells[j];
          if (neighborCell) {
            neighborCell.dataset.state = neighborCell.dataset.state === "on" ? "off" : "on";
            changeColor(neighborCell);
          }
        }
      }


      let isWinner = true;
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid.rows[i].cells[j].dataset.state === "on") {
            isWinner = false;
            break;
          }
        }
      }
        if (isWinner) {
        alert("Congratulations, you won!");
        clearInterval(timerInterval); 
      }

      if (prevClickCoords[0] == row && prevClickCoords[1] == col){
        myTurns--
        prevClickCoords = [-1, -1];
      }
      else{
        myTurns++;
        prevClickCoords = [row, col];
      }
      
      myTurnsLabel.textContent = `My Turns: ${myTurns}` 

      
    
  }

  function resetGame() {
    const data = getRandom(dataA, dataB, dataC);
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = grid.rows[i].cells[j];
        cell.dataset.state = data.arr[i][j] ? "on" : "off";
        changeColor(cell);
      }
    }
    remainingTurns = data.moveNum;
    turnsLabel.textContent = `Min Turns: ${remainingTurns}`;

    myTurns = 0;
    myTurnsLabel.textContent = `My Turns: ${myTurns}`

    secondsElapsed = 0;
    timerLabel.textContent = "Time: 00:00";
    clearInterval(timerInterval);

    startTimer();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      secondsElapsed++;
      const minutes = Math.floor(secondsElapsed / 60);
      const seconds = secondsElapsed % 60;
      timerLabel.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); 
  }

  startTimer();
})();

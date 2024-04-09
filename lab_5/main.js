const container = document.getElementById('container');
const createSquareButton = document.getElementById('create-square');
const difficultySelect = document.getElementById('difficulty');
const colorSelect = document.getElementById('color');
const timerSpan = document.getElementById('timer');
const scoreSpan = document.getElementById('score');

let score = 0;
let timerInterval; 

createSquareButton.addEventListener('click', function() {
  createSquare();
  document.getElementById('a').style.display = 'none';
});

function createSquare() {
  const square = createNewSquare();
  container.appendChild(square);
}

function createNewSquare() {
  const square = document.createElement('div');
  square.classList.add('square');

  const { size, timerDuration } = getSizeAndTimerDuration();

  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  const { randomX, randomY } = getRandomPosition(size);
  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;

  const chosenColor = colorSelect.value;
  square.style.backgroundColor = chosenColor;

  startTimer(timerDuration, square);

  square.addEventListener('click', function() {
    handleSquareClick(square, timerDuration);
  });

  return square;
}

function getSizeAndTimerDuration() {
  const difficulty = difficultySelect.value;
  let size, timerDuration;
  switch (difficulty) {
    case "easy":
      size = 100;
      timerDuration = 6; // Seconds
      break;
    case "normal":
      size = 50;
      timerDuration = 4;
      break;
    case "hard":
      size = 20;
      timerDuration = 2;
      break;
  }
  return { size, timerDuration };
}

function getRandomPosition(size) {
  const randomX = Math.floor(Math.random() * (window.innerWidth - size - 40));
  const randomY = Math.floor(Math.random() * (window.innerHeight - size - 40));
  return { randomX, randomY };
}

function startTimer(duration, square) {
  let secondsLeft = duration;
  timerSpan.textContent = `${secondsLeft.toString().padStart(2, '0')}`;

  clearTimeout(timerInterval);

  timerInterval = setInterval(function() {
    secondsLeft--;
    timerSpan.textContent = `${secondsLeft.toString().padStart(2, '0')}`;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("You Lose! Your score is: " + score);
      container.removeChild(square);
    }
  }, 1000);
}

function handleSquareClick(square, timerDuration) {
  clearTimeout(timerInterval);
  startTimer(timerDuration, square);
  score++;
  scoreSpan.textContent = `Score: ${score}`;
  container.removeChild(square);
  createSquare();
}
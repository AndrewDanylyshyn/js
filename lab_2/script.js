console.log("Good bye (some name) prints when name is starts with letter J.");
console.log("Good morning (some name) prints when name contains 2 or more vowels.");
console.log("Good morning (some name) prints when previous statements are false.");

let A = {};
A.names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

A.JCheck = function(name_index){
  return A.names[name_index][0] == "J" || A.names[name_index][0] == "j"
}
A.VowelCount = function(name_index){
  let vowels = ["a", "e", "i", "o", "u"];
  let out = 0;
  for (i in A.names[name_index]){
      if (vowels.includes(A.names[name_index][i].toLowerCase())){
        out += 1;
      }
  }

  return out > 1;
}

for (name in A.names) { 
  if (A.JCheck(name)) {
    GoodBye.speak(A.names[name]);
  } 
  else if (A.VowelCount(name)) {
    GoodMorning.speak(A.names[name]);
  }
  else {
    Hello.speak(A.names[name]);
  }
}
function randomWordGenerator() {
  
  // Define the variables
  var array = [];
  var userInput;
  
  // Prompt for String
  for(var index = 0; index < 10; index++) {
    userInput = prompt("Please enter a string." + (index + 1));
    array.push(userInput);
    document.write("You entered: " + userInput + "<br>" + "<br>");
  }

  // Generator
  var answer = array[Math.floor(Math.random() * array.length)];

  // Generator Pick Display
  document.write("The generator picked: " + answer);
}

randomWordGenerator();
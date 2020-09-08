// We'll create an object for the player and the computer.
const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  
  // The choices can go into an array.
  const choices = ["Rock", "Paper", "Scissors"];
  
  // To get the computer's choice, we'll create a new variable called randomIndex. The variable will generate a new random number each time the program runs. See how we used choices.length? This makes sure that we're only getting a random numbers that correspond to the length of the array.
  
  function eventClickedRock() {
    console.log('ADMIN ROCK')
    player.currentChoice = choices[0];
    computerChooses();
    console.log('Player Chose ' + player.currentChoice)
    console.log('Computer Chose ' + computer.currentChoice)
    compareChoices();
  };
  function eventClickedPaper() {
    console.log('ADMIN PAPER')
    player.currentChoice = choices[1];
    computerChooses();
    console.log('Player Chose ' + player.currentChoice)
    console.log('Computer Chose ' + computer.currentChoice)
    compareChoices();
  };
  function eventClickedScissors() {
    console.log('ADMIN SCISSORS')
    player.currentChoice = choices[2];
    computerChooses();
    console.log('Player Chose ' + player.currentChoice)
    console.log('Computer Chose ' + computer.currentChoice)
    compareChoices();
  };
  
  let selectRock = document.querySelector('#rock');
  selectRock.addEventListener('click', eventClickedRock);
  
  let selectPaper = document.querySelector('#paper');
  selectPaper.addEventListener('click', eventClickedPaper);
  
  let selectScissors = document.querySelector('#scissors');
  selectScissors.addEventListener('click', eventClickedScissors);
  
  
  
  
  //Random Number Generator
  //const playerRandomIndex = Math.floor(Math.random() * choices.length);
  function computerChooses(){
    const computerRandomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[computerRandomIndex];
  }
  
  // Then, we'll update the currentChoice property of the computer object with its choice. We get its choice by accessing the choices array at the randomIndex we generated.
  
  
  
  // Here's a console.log to check our work!
  
  
  
  function compareChoices() {
    
  if (computer.currentChoice === player.currentChoice ) {
    displayResult('Its a tie!');
  };
  
  
  if( computer.currentChoice === choices[0] && player.currentChoice === choices[2]) {
    displayResult('COMPUTER WINS')
  } else if (computer.currentChoice === choices[2] && player.currentChoice === choices[0]) {
    displayResult('PLAYER WINS')
  }
  
  
  if( computer.currentChoice === choices[1] && player.currentChoice === choices[0]) {
    displayResult('COMPUTER WINS')
  } else if (computer.currentChoice === choices[0] && player.currentChoice === choices[1]) {
    displayResult('PLAYER WINS')
  };
  
  if( computer.currentChoice === choices[1] && player.currentChoice === choices[2]) {
    displayResult('PLAYER WINS')
  } else if (computer.currentChoice === choices[2] && player.currentChoice === choices[1]) {
    displayResult('COMPUTER WINS')
  }
  
  };
  
  // The displayResult function creates a new paragraph element, called resultText, that adds the results from the compareChoices function above.
  function displayResult(result){ 
    const resultText = document.createElement('p');
    resultText.innerText = result;
    document.body.appendChild(resultText);
  }
  
  
  
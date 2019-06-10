'use strict';

alert('Let\'s play a guessing game! Try to determine what my 7 responses (Yes/No) would be.');

//Array of questions.
var quesArray = ['Do you think I enjoy movies?', 'Is the outdoors greatness to me?', 'Have I coded previously and/or am I a compentent developer?', 'Do I have any secret super powers?', 'Am I a seafood lover?',  ];

//Prompt user's name.
var userName = prompt('How may I address you?');
alert('And so it begins ' + userName + '...');

//Variables to hold user input from prompt. Then check input and respond to user.
var countCorrect = 0; 

//number of games to play.
var numOfGames = 7;

function questionOne () {
  //Question 1
  var inputMovie = prompt(quesArray[0]).toLowerCase();
  if (inputMovie === 'yes' || inputMovie === 'y') {
    alert('You are right - movies are a huge part of my life!');
    countCorrect++;
  } else if (inputMovie === 'no' || inputMovie === 'n') {
    alert('You couldn\'t be more wrong :(');
  } else {
    alert('What kind of answer is that?!!??!');
  }
}

questionOne();

function questionTwo () {
  //Question 2
  var inputOutdoors = prompt(quesArray[1]).toLowerCase();
  if (inputOutdoors === 'yes' || inputOutdoors === 'y') {
    alert('There is something so calming about Nature, I thoroughly enjoy the outdoors.');
    countCorrect++;
  } else if (inputOutdoors === 'no' || inputOutdoors === 'n') {
    alert ('You have just insulted me, prepare do duel..');
  } else {
    alert('What kind of answer is that?!!??!');
  }

}

questionTwo();

function questionThree() {

  //Question 3
  var inputCode = prompt(quesArray[2]).toLowerCase();
  if (inputCode === 'yes' || inputCode === 'y') {
    alert('Indeed.');
    countCorrect++;
  } else if (inputCode === 'no' || inputCode === 'n') {
    alert ('Oh yee with little faith!');
  } else {
    alert('What kind of answer is that?!!??!');
  }
}

questionThree();

function questionFour() {
  //Question 4
  var inputPowers = prompt(quesArray[3]).toLowerCase();
  if (inputPowers === 'yes' || inputPowers === 'y') {
    alert('Awwwwww you think so highly of me *blush*');
  } else if (inputPowers === 'no' || inputPowers === 'n') {
    alert ('This is unfortunatly correct.');
    countCorrect++;
  } else {
    alert('What kind of answer is that?!!??!');
  }
}

questionFour();

function questionFive() {
  //Question 5
  var inputSeafood = prompt(quesArray[4]).toLowerCase();
  if (inputSeafood === 'yes' || inputSeafood === 'y') {
    alert('nom nom nom nom nom!');
    countCorrect++;
  } else if (inputSeafood === 'no' || inputSeafood === 'n') {
    alert ('...We cannot be friends, good bye.');
  } else {
    alert('What kind of answer is that?!!??!');
  }

}

questionFive();

function questionSix(){
//Question 6
  var inputNumGuess = prompt(quesArray[5]);
  var myNum = '3';

  for (var i = 3; i > 0; i--) {
    if (inputNumGuess === myNum) {
      countCorrect++;
      break;
    } else if (inputNumGuess < myNum) {
      inputNumGuess = prompt('Wrong, your guess is too low. Guess again...');
    } else if (inputNumGuess > myNum) {
      inputNumGuess = prompt('Wrong, your guess is too high. Guess again...');
    }
  }
  if (inputNumGuess !== myNum) {
    alert('Sorry you ran out of guesses');
  } else {
    alert('You are correctomondo!');
  }

}

questionSix();

function questionSeven() {
  //Question 7
  var answerBank = ['pepperoni', 'green bell peppers', 'italian sauage', 'onions', 'tomatoes'];
  var inputPizzaTop;
  var correctAnswer = false;

  //User has 6 attempts to get correct answer.
  for (var j = 6; j > 0; j--) {
    inputPizzaTop = prompt('Take a guess(' + j + ') at one of my favoriate pizza toppings').toLowerCase();
    //Check to see if users input is in my array.
    for (var p = 0; p < answerBank.length; p++) {
      if (inputPizzaTop === answerBank[p]) {
        alert('That\'s correct! Here are all my favorite toppings: ' + answerBank);
        countCorrect++;
        correctAnswer = true;
        j = 'null'; //break out of outer loop.
        break;
      }
    }
  }
  //Display all favorite toppings if user did not guess correctly.
  if(!correctAnswer) {
    alert('Good try ' + userName + '. Here are all my favorite toppings: ' + answerBank);
  }
}

questionSeven();

//Send ending message to user with results of guessing game.
alert('Thanks for playing ' + userName + '. You got ' + countCorrect + '\\' + numOfGames + ' correct.');


'use strict';

alert('Let\'s play a guessing game! Try to determine what my 5 responses (Yes/No) would be.');

//Prompt user's name.
var userName = prompt('How may I address you?');
alert('And so it begins ' + userName + '...');

//Variables to hold user input from prompt. Then check input and respond to user.
var countCorrect = 0; 
var inputMovie = prompt('Do you think I enjoy movies?').toLowerCase();
if (inputMovie === 'yes' || inputMovie === 'y') {
  alert('You are right - movies are a huge part of my life!');
  countCorrect++;
} else if (inputMovie === 'no' || inputMovie === 'n') {
  alert('You couldn\'t be more wrong :(');
} else {
  alert('What kind of answer is that?!!??!');
}

var inputOutdoors = prompt('Is the outdoors greatness to me?').toLowerCase();
if (inputOutdoors === 'yes' || inputOutdoors === 'y') {
  alert('There is something so calming about Nature, I thoroughly enjoy the outdoors.');
  countCorrect++;
} else if (inputOutdoors === 'no' || inputOutdoors === 'n') {
  alert ('You have just insulted me, prepare do duel..');
} else {
  alert('What kind of answer is that?!!??!');
}

var inputCode = prompt('Have I coded previously and/or am I a compentent developer?').toLowerCase();
if (inputCode === 'yes' || inputCode === 'y') {
  alert('Indeed.');
  countCorrect++;
} else if (inputCode === 'no' || inputCode === 'n') {
  alert ('Oh yee with little faith!');
} else {
  alert('What kind of answer is that?!!??!');
}

var inputPowers = prompt('Do I have any secret super powers?').toLowerCase();
if (inputPowers === 'yes' || inputPowers === 'y') {
  alert('Awwwwww you think so highly of me *blush*');
} else if (inputPowers === 'no' || inputPowers === 'n') {
  alert ('This is unfortunatly correct.');
  countCorrect++;
} else {
  alert('What kind of answer is that?!!??!');
}

var inputSeafood = prompt('Am I a seafood lover?').toLowerCase();
if (inputSeafood === 'yes' || inputSeafood === 'y') {
  alert('nom nom nom nom nom!');
  countCorrect++;
} else if (inputSeafood === 'no' || inputSeafood === 'n') {
  alert ('...We cannot be friends, good bye.');
} else {
  alert('What kind of answer is that?!!??!');
}

//Send ending message to user with results of guessing game.
alert('Thanks for playing ' + userName + '. You got ' + countCorrect + '\\5 correct.');

//Debug help; write to console.
console.log('userName: ' + userName);
console.log('inputMovie: ' + inputMovie);
console.log('inputOutdoors: ' + inputOutdoors);
console.log('inputCode: ' + inputCode);
console.log('inputPowers: ' + inputPowers);
console.log('inputSeafood: ' + inputSeafood);
console.log('countCorrect: ' + countCorrect);

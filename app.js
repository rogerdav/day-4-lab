'use strict';


alert('Answer all question with a Yes or No. Y/N is also acceptable.');

var answers =  [];
var correctanswers = ['n','y','n','y','y'];
var correctanswersl = ['no','yes','no','yes','yes'];
var anscounter = 0;


var nameofuser = prompt('What is your name?');




var birthplace = prompt('Was Roger born in America?');
birthplace = birthplace.toLowerCase();
console.log('birthplace',birthplace);
answers[0] = birthplace;



if (birthplace === 'y' || birthplace === 'yes') {
  alert('You are incorrect!');
} else if (birthplace === 'n' || birthplace === 'no') {
  alert('What gave it away? The accent');
} else {
  alert('Not a valid answer.');
}


var married = prompt('Is Roger married?');
married = married.toLowerCase();
console.log('married',married);
answers[1] = married;




if (married === 'y' || married === 'yes') {
  alert('You got it, he is off the market.');
} else if (married === 'n' || married === 'no') {
  alert('Awwwwww you got that wrong');
} else {
  alert('Not a valid answer.');
}

var children = prompt('Does Roger have  more than one child?');
children = children.toLowerCase();
console.log('children',children);
answers[2] = children;



if (children === 'n' || children === 'no') {
  alert('Wow lucky guess.');
} else if (children === 'y' || children === 'yes') {
  alert('Bummer you got that wrong.');
} else {
  alert('Not a valid answer.');
}

var lifechanges = prompt('Is Roger making a major life change?');
lifechanges = lifechanges.toLowerCase();
console.log('life changes',lifechanges);
answers[3] = lifechanges;




if (lifechanges === 'y' || lifechanges === 'yes') {
  alert('Hell yes he is, hopefully it works out well.');
} else if (lifechanges === 'n' || lifechanges === 'no') {
  alert('Sorry that you don\'t think so');
} else {
  alert('Not a valid answer.');
}

var likes = prompt('Does Roger Like coding?');
likes = likes.toLowerCase();
console.log('Likes coding',likes);
answers[4] = likes;




if (likes === 'y' || likes === 'yes') {
  alert('Time will tell');
} else if (likes === 'n' || likes === 'no') {
  alert('Don\'t be such a negative person!');
} else {
  alert('Not a valid answer.');
}

for (var i = 0; i < answers.length; i++) {
  if (answers[i] === correctanswers[i]) {
    anscounter = anscounter + 1 ;
  }
}

for (var k = 0; k < answers.length; k++) {
  if (answers[k] === correctanswersl[k]) {
    anscounter = anscounter + 1 ;
  }
}
alert(nameofuser + ' you got ' + anscounter + ' answers correct');
console.log('anscounter ',anscounter);

var guesscounter = 0;
var userguess;
var maxguesses = 4;

while (userguess !== 7 && guesscounter < maxguesses) {
  userguess = parseInt(prompt('How many countries have I visited? you have ' + (maxguesses - guesscounter) + ' guesses left.'));

  if (userguess < 7) {
    alert('Nope too low.');
    guesscounter++;
  } else if (userguess > 7) {
    alert('Naw too high');
    guesscounter++;
  } else if (isNaN(userguess) || userguess === null) {
    alert('please enter a number');
    guesscounter++;
  }
}
console.log('guess counter', guesscounter);

// question 7 starts here
var flag1 = false;
var citieslived = ['seattle','portland','austin','orlando','london'];
var uguesscity;
var maxcityguess = 6;
var guessnum = 0;

while (!flag1 && guessnum < 6) {
  uguesscity = prompt('Guess a city i have lived, you have ' + (maxcityguess - guessnum) + ' Turns left');
  guessnum++;

  for (var j = 0; j < citieslived.length; j++) {
    if (citieslived[j] === uguesscity) {
      flag1 = true;
      break;
    }
  }
  if (!flag1) {
    alert('sorry');
  }else{
    alert('Correct');
    break;
  }
}

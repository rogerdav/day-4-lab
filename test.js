'use strict';



var flag1 = false;
var citieslived = ['seattle','portland','austin','orlando','london'];
var uguesscity;
var maxcityguess = 6;
var guessnum = 0;

function checkArray(answer, arrayName) {
  for( var j = 0 ; j < arrayName.length ; j++) {
    if(arrayName[j] === answer) {
      flag1 = true;
    }
  }
}

while (!flag1 && guessnum < 6) {
  uguesscity = prompt('Guess a city i have lived, you have ' + (maxcityguess - guessnum) + ' Turns left');
  guessnum++;

  checkArray(uguesscity, citieslived);

//  for (var j = 0; j < citieslived.length; j++) {
//    if (citieslived[j] === uguesscity) {
//      flag1 = true;
//      break;
//    }
//  }

  if (!flag1) {
    alert('sorry');
  }else{
    alert('Correct');
  }
}

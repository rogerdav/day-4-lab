'use strict';
var flag1 = false;
var citieslived = ['seattle','portland','austin','orlando','london'];
var uguesscity;
var guessnum = 0;

while (!flag1 && guessnum < 6) {
  uguesscity = prompt('Guess a city i have lived, you have ' + guessnum + ' turns left');
  guessnum++;

  for (var i = 0; i < citieslived.length; i++) {
    if (citieslived[i] === uguesscity) {
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

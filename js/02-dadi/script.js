
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del Computer: ' + computerNumber)

let userNumber = parseInt(prompt('Inserisci un numero intero da 1 a 6'));

let isValid_userNumber = (!isNaN(userNumber) && Number.isInteger(userNumber) && userNumber > 0 && userNumber <= 6);
console.log(userNumber)

if(!isValid_userNumber) {

    while (!isValid_userNumber) {
      userNumber = parseInt(prompt('Inserisci un numero intero da 1 a 6'));
      console.log(userNumber)
    }

  } else if (userNumber > computerNumber) {
    console.log('Hai vinto!')
  } else {
    console.log('Hai perso')
  }
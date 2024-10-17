
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Genero un numero a caso tra 1 e 6 e lo assegno al Computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Numero del Computer: ' + computerNumber)

// Chiedo un numero al giocatore tramite Prompt
let userNumber = parseInt(prompt('Inserisci un numero intero da 1 a 6'));
console.log('Numero del Giocatore: ' + userNumber);

// Dichiaro le condizioni in cui il umero inserito dal giocatore è valido
let isValid_userNumber = (!isNaN(userNumber) && Number.isInteger(userNumber) && userNumber > 0 && userNumber <= 6);
console.log('Il numero inserito è valido? ' + isValid_userNumber)

// Dichiaro la variabile
let outputMessage;

// // SE il valore inserito NON è valido
// if (!isValid_userNumber) {

//     console.log('Numero non valido')

// } else {

//     outputMessage = computerNumber > userNumber ? 'Hai perso': 'Hai vinto!';
//     console.log(outputMessage);

// }


// SE il valore inserito NON è valido
while (!isValid_userNumber) {

  console.log('Numero non valido');
  userNumber = prompt('Inserisci nuovamente un numero valido da 1 a 6')

}

console.log('Numero valido')



  // outputMessage = computerNumber > userNumber ? 'Hai perso': 'Hai vinto!';
  // console.log(outputMessage);














// // SE il numero del giocatore supera quello del Computer
// if (userNumber > computerNumber) {
//   // STAMPO il messaggio di vittoria
//   console.log('Hai vinto!')

// // ALTRIMENTI
// } else {
//   // STAMPO il messaggio di sconfitta
//   console.log('Hai perso')
// }
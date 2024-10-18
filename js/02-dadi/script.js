
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Genero un numero a caso tra 1 e 6 e lo assegno al Computer
// In questi casi si fa: 
// const computerNumber = Math.floor(Math.random() * (max - min + 1))) + min;

const computerNumber = Math.floor(Math.random() * (6 -1 + 1)) + 1;
console.log('Numero del Computer: ' + computerNumber);

// Chiedo un numero al giocatore tramite Prompt
let userNumber = parseInt(prompt('Inserisci un numero intero da 1 a 6'));

/* Non posso dichiarare la condizione di validità con una variabile, altrimenti il mio WHILE considererà sempre il valore
che esce per primo, che se è TRUE mi chiude il ciclo, ma se è FALSE il ciclo si ripete all'infinito. */
// let isValid_userNumber = (!isNaN(userNumber) && Number.isInteger(userNumber) && userNumber > 0 && userNumber <= 6);

// FINCHE' il numero inserito non è valido

// Inserisco quindi le condizioni di validazione nel WHILE, così che siano analizzate ogni volta, e non un valore statico

while (isNaN(userNumber) || userNumber > 6 || userNumber <= 0) {
  userNumber = parseInt(prompt('Riprova inserendo un numero intero da 1 a 6'));
  console.log('Valore non valido: ' + userNumber);
}

console.log('Numero del Giocatore: ' + userNumber);

if (userNumber > computerNumber) {
  console.log('Hai vinto');
} else if (userNumber < computerNumber) {
  console.log('Hai perso');
} else {
  console.log('Pareggio');
}

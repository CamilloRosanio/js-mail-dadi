/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

// WHILE: Finchè X non è = Y richiedi X

let valueX = prompt("Please enter X");

while(valueX !== "xxx"){
       valueX = prompt("Please enter X again"); 
       console.log('Input: ' + valueX);
}

console.log('valueX OK')


// // Ho una lista di Email valide
// const emailList = ['1@test.it', '2@test.it', '3@test.it', '4@test.it']

// // Dichiaro la variabile "i"
// let i = 0;

// // Chiedo all'utente la sua Email
// let userEmail = prompt("Please enter your Email.");
// console.log('User input: ' + userEmail);

// // FINCHE' l'utente non inserisce una Email valida
// while (!emailList.includes(userEmail)) { 

//     // Chiedo nuovamente la sua Email
//     userEmail = prompt("Wrong Email. Please enter egain.");
//     console.log('User input: ' + userEmail);

// }

// // Stampo un alert che conferma che l'Email inserita è in lista, quindi valida
// alert("Email OK");
// console.log('Email OK: ' + userEmail)

/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/


// WHILE: Finchè X non è = Y richiedi X

// let valueX = prompt("Please enter X");

// while(valueX !== "xxx"){
//        valueX = prompt("Please enter X again"); 
//        console.log('Input: ' + valueX);
// }

// console.log('valueX OK')





// SOLUZIONE #1 -----------------------------------------------------------------

// // Ho un array di Email valide
// const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// // Dichiaro la variabile "i"
// let i = 0;

// // Chiedo all'utente la sua Email
// let userEmail = prompt("Please enter your Email.");
// console.log('User input: ' + userEmail);

// // FINCHE' l'utente non inserisce una Email inclusa nella lista
// while (!emailList.includes(userEmail)) { 

//     // Chiedo nuovamente la sua Email
//     userEmail = prompt("Wrong Email. Please enter egain.");
//     console.log('User input: ' + userEmail);

// }

// // Stampo un alert che conferma che l'Email inserita è in lista, quindi valida
// alert("Email OK");
// console.log('Email OK: ' + userEmail)





// SOLUZIONE #2 -----------------------------------------------------------------

// Ho un array di Email valide
const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// Chiedo all'utente la sua Email
const userEmail = prompt("Please enter your Email.");

// Dichiaro un array di utilità che conterrà l'indice della email cercata
let searchedEmailIndex = [];

for (let i = 0; i < emailList.length; i++) {

    if (userEmail === emailList[i]) {
      searchedEmailIndex.push(i);
    } else {
      console.log('Non corrisponde: ' + i)
    }

}

console.log('Email valida: ' + emailList[searchedEmailIndex])

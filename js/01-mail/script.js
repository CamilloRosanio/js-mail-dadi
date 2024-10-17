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

// // Ho un array di Email valide
// const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// // Chiedo all'utente la sua Email
// const userEmail = prompt("Please enter your Email.");

// // Dichiaro un array di utilità che conterrà l'indice della email cercata
// let searchedEmailIndex = [];

// for (let i = 0; i < emailList.length; i++) {

//     if (userEmail === emailList[i]) {
//       searchedEmailIndex.push(i);
//     } else {
//       console.log('Non corrisponde: ' + i)
//     }

// }

// console.log('Email valida: ' + emailList[searchedEmailIndex])




// SOLUZIONE #3 -----------------------------------------------------------------

// Ho un array di Email valide
const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// Chiedo all'utente la sua Email
const userEmail = prompt("Please enter your Email.");
console.log('Input inserito: ' + userEmail)

// Verifico il mio criterio di validità del dato inserito dall'utente
isValid_userEmail = userEmail.length >= 3;



// SE la email inserita è un input valido
if (isValid_userEmail) {

    // Dichiaro prima la mia variabile SENTINELLA e poi
    let isEmailFound = false;

    // PER OGNI email presente nel mio array
    for (let i = 0; i < emailList.length; i++) {
        const currentEmail = emailList[i];

        // SE l'email inserita corrisponde a quella controllata in quel momento nell'array
        if (userEmail === currentEmail) {

          // Metto un flag "true" alla mia variabile SENTINELLA, fermando di fatto il ciclo
          isEmailFound = true;
        }
    }

    // SE la mia variabile SENTINELLA riporta "true"
    if (isEmailFound) {
      // Stampo in console questo messaggio
      console.log('Email valida: ' + userEmail)
    } else {
      // ALTRIMENTI stampo in console quest'altro messaggio
      console.log('Email NON trovata')
    }

} 

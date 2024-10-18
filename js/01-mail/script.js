/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/




// SOLUZIONE #1 -----------------------------------------------------------------

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

// console.log('Email valida: ' + emailList[searchedEmailIndex]);






// SOLUZIONE #2 -----------------------------------------------------------------

// Ho un array di Email valide
const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// Chiedo all'utente la sua Email
const userEmail = prompt("Please enter your Email.");
console.log('Input inserito: ' + userEmail)

// Verifico il mio criterio di validità del dato inserito dall'utente, in questo caso un banale conteggio di caratteri come esempio.
const isValid_userEmail = userEmail.length >= 3;



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

    // OUTPUT CON IF
    // SE la mia variabile SENTINELLA riporta "true"
    if (isEmailFound) {
      // Stampo in console questo messaggio
      console.log('Email valida: ' + userEmail)
    } else {
      // ALTRIMENTI stampo in console quest'altro messaggio
      console.log('Email NON trovata')
    }

    // OUTPUT CON TERNARY OPERATOR
    // Si potrebbe anche impostare una "let" di outputMessage con operatore ternario che dia due valori in base a true o false

} else {
  console.log('Valore inserito non valido')
}




// SOLUZIONE #3 -----------------------------------------------------------------

/* ECCO COME INTERROMPERE UN CICLO
Basta impiegare al posto di "for" (che deve eseguire il ciclo un numero DEFINITO di volte),
il "while" (cioè FINCHE').
Il WHILE è un ciclo che esegue una operazione finchè la condizione non è raggiunta. */


// // Ho un array di Email valide
// const emailList = ['aaa', 'bbb', 'ccc', 'ddd']

// // Chiedo all'utente la sua Email
// const userEmail = prompt("Please enter your Email.");
// console.log('Input inserito: ' + userEmail);

// // Verifico il mio criterio di validità del dato inserito dall'utente, in questo caso un banale conteggio di caratteri come esempio.
// const isValid_userEmail = userEmail.length >= 3;
// console.log('Email valida: ' + isValid_userEmail);


//*************WHILE***************/

// // Imposto prima di tutto il contatore, perch'è il WHILE

// // inizializzazione della "i" fuori prima del While
// let i = 0;

// // condizione all'interno del WHILE e incremento all'interno ma alla fine
// while (condizione true/false) {

//   incremento (i++);
// }


// // SE la email inserita è un input valido
// if (isValid_userEmail) {

//   // Dichiaro prima la mia variabile SENTINELLA e poi
//   let isEmailFound = false;

//   // Inizializzo la "i" del WHILE prima del WHILE
//   let i = 0;

//   // FINCHE' non trovo la Email nel mio array
//   while (i < emailList.length && !isEmailFound) {
//     const currentEmail = emailList[i];

//     if (currentEmail === userEmail) {
//       isEmailFound = true;
//     }

//     i++;
//   }

//   let outputMessage = isEmailFound ? 'Email valida': 'Email non trovata';

//   alert(outputMessage);
//   console.log(outputMessage)

// } else {
//   alert('Email non valida');
//   console.log('Email non valida');
// }

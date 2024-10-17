/*
Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

const emailList = ['laprima@email.it', 'laseconda@email.it', 'laterza@email.it']


const userEmail = prompt('Inserisci la tua Email')


for (let i = 0; i < emailList.length; i++) {
    isValid_userEmail = (userEmail == emailList[i])
    
    console.log(emailList[i])

    if (!isValid_userEmail) {
      outputMessage = 'Email non trovata'
    } else {
      outputMessage = 'Email valida'
    }

    console.log(outputMessage)
}


// if (emailList.includes(userEmail)) {
//   messaggio = 'Email valida'
// } else {
//   messaggio = 'Email NON valida'
// }

// console.log(messaggio)
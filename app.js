//Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
//Se il numero è dispari, lo salviamo in una lista. 
//Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 
//Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.



let numeroUser = parseInt(prompt('inserisci dei numeri'))

let DispariArray = []

let resto = numeroUser % 2

let numDispari = (resto = 1)

while (numDispari >= 10) {
    numeroUser = parseInt(prompt('inserisci dei numeri'))
}

console.log(numeroUser)


// for (let i = 0; i < 100; i++){
    
//     let correct = numeroUser[i]
//     console.log(correct)

//     if ( numeroUser = (resto = 1)){
//         DispariArray.push(numeroUser)
//     }
//     else {
//         DispariArray.pop()
//     }
// console.log(DispariArray, resto, numeroUser)
// }


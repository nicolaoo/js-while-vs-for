//Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
//Se il numero è dispari, lo salviamo in una lista. 
//Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 
//Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
//Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.




let dispariArray = []



while (dispariArray.length < 10) {
    numeroUser = parseInt(prompt('inserisci dei numeri'))
    
    let resto = numeroUser % 2

    if (resto === 0 || isNaN(numeroUser)) {
        console.log('pari')
    } else {
        console.log('dispari')
        dispariArray.push(numeroUser)
    }
}

let stampaElement = document.getElementById('numeri-dispari')

for (let i = 0; i < dispariArray.length; i++) {
    let numeroCorrente = dispariArray[i]
    console.log(numeroCorrente)

    stampaElement.innerHTML = numeroCorrente
}




console.log(dispariArray)


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


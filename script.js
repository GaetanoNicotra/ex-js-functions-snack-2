// SNACK 1

// dichiarativa
function somma(a, b) {
    return a + b;
}

// anonima
const somma = function (a, b) {
    return a + b;
}

// arrow function
const somma = (a, b) => {
    return a + b;
}

// SNACK 2

const quadrato = (n) => n * n;


// SNACK 3

const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b)

console.log(eseguiOperazione(60, 20, sottrazione))
console.log(eseguiOperazione(10, 28, moltiplicazione))
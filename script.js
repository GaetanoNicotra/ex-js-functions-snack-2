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

// SNACK 4

const creaTimer = (ms) => {
    return function () {
        setTimeout(() => {
            console.log('TEMPO SCADUTO!')
        }, ms);
    };
};

const timer = creaTimer(2000);
timer()


// SNACK 5 

const stampaOgniSecondo = (mess) => {
    return setInterval(function () {
        console.log(mess)
    }, 1000)
}

const messaggio = stampaOgniSecondo('Benvenuto in JavaScript')


//SNACK 6

let counter = 0;

const creaContatoreAutomatico = (ms) => {
    return function () {
        setInterval(function () {
            counter = counter + 1;
            console.log(counter)
        }, ms)
    }
}

const valore = creaContatoreAutomatico(3000);
valore()
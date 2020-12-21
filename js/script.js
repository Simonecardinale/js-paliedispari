// l'utente sceglie pari o dispari

var pariDispari = prompt("Pari o dispari?");

if (pariDispari != "pari" && pariDispari != "dispari") {
    alert("Devi scripere pari o dispari");
} else {
    document.getElementById("pari_dispari_utente").innerHTML += "Hai scelto " + pariDispari;
}

// l'utente sceglie il numero

var numeriUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

if (numeriUtente < 1 || numeriUtente > 5) {
    alert("Intervallo errato");
} else {
    document.getElementById("numero_utente").innerHTML+= "Hai scelto " + numeriUtente;
}

// scelta del computer
var computer = numeroComputer();
document.getElementById("numero_computer").innerHTML+= "Il computer ha scelto " + computer;

function numeroComputer() {
    var risultato = Math.floor(Math.random() * (1 - 5) + 5);
    return risultato;
}

// stabiliamo la somma

var sommaFinale = computer + numeriUtente;
document.getElementById('somma_finale').innerHTML += "La somma tra il tuo numero e quello del computer è " + sommaFinale;

// definiamo se pari o dispari

var verdetto = pariDispariFinale(sommaFinale);


if (verdetto == 0) {
    document.getElementById('somma_pari_dispari').innerHTML += "La somma ha generato un numero pari";
} else {
    document.getElementById('somma_pari_dispari').innerHTML += "La somma ha generato un numero dispari";
}


function pariDispariFinale (a) {
    var finale = a % 2;
    return finale;
}

// verdetto finale

if ((pariDispari == "pari" && verdetto == 0) || (pariDispari == "dispari" && verdetto != 0)) {
    document.getElementById('verdetto_finale').innerHTML = "Complimenti hai vinto!!"
} else {
    document.getElementById('verdetto_finale').innerHTML = "Hai perso";
}
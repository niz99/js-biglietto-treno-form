let genera = document.getElementById("bottoneGenera");
let annulla = document.getElementById("bottoneAnnulla");


bottoneGenera.addEventListener("click",
    function() {

        let nome = document.getElementById("nome").value;
        let km = parseInt(document.getElementById("km").value);
        let eta = document.getElementById("eta").value;

        let numeroCarrozza = Math.floor(Math.random() * 10) + 1;

        let numeroCP = Math.floor(Math.random() * 9999) + 90000;

        let prezzo = (km * 0.21);

        if( eta == "minorenne"){
            let sconto20 = (prezzo / 100) * 20;
            prezzo = (prezzo - sconto20).toFixed(2);
            let biglietto = 'Biglietto Ridotto';

        } else if ( eta == "over"){
            let sconto40 = (prezzo / 100) * 40; 
            prezzo = (prezzo - sconto40).toFixed(2);
            let biglietto = 'Biglietto Silver';

        } else {
            let biglietto = 'Biglietto Standard';
        }

        document.getElementById('nome-utente').innerHTML = nome;
        document.getElementById('costo').innerHTML = prezzo + "€";
        document.getElementById('carrozza').innerHTML = numeroCarrozza;
        document.getElementById('codice').innerHTML = numeroCP;
        document.getElementById('offerta').innerHTML = biglietto;
        document.getElementById('biglietto').classList.add('open');
    }
);

bottoneAnnulla.addEventListener("click",
    function() {
        document.getElementById('biglietto').classList.remove('open');
        let nome = document.getElementById("nome").value = "";
        let km = parseInt(document.getElementById("km").value = "");
        let eta = document.getElementById("eta").value = "";
    }
);

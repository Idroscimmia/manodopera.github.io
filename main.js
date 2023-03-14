function calcolaManodopera() {
    event.preventDefault();
    let valoreAcquisto = document.getElementById("valoreAcquisto").value / 1.22;
    let valoreVendita = document.getElementById("valoreVendita").value;
    let valoreManodopera = (valoreVendita - (valoreAcquisto * 1.22)) / 0.98;
    console.log(valoreManodopera);
    valoreManodopera = valoreManodopera.toFixed(2);
    if (document.getElementById("risultato")) {
        let risultato = document.getElementById("risultato");
        risultato.textContent = `Il valore della manodopera &egrave; di ${valoreManodopera} euro`;
    }
    else {
        let br = document.createElement("br");
        document.getElementById("formManodopera").appendChild(br);
        let risultato = document.createElement("span");
        risultato.id = "risultato";
        risultato.className = "risultato";
        risultato.textContent = `Il valore della manodopera &egrave; di ${valoreManodopera} euro`;
        document.getElementById("formManodopera").appendChild(risultato);
    }
}

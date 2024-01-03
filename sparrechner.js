function berechneSparen() {
    var anfangsbetrag = parseFloat(document.getElementById('anfangsbetrag').value);
    var monatlicheEinlage = parseFloat(document.getElementById('monatlicheEinlage').value);
    var jahre = parseFloat(document.getElementById('jahre').value);
    var zinsrate = parseFloat(document.getElementById('zinsrate').value);

    var monatlicheZinsrate = (zinsrate / 100) / 12;
    var gesamtMonate = jahre * 12;

    var endbetrag = anfangsbetrag * Math.pow((1 + monatlicheZinsrate), gesamtMonate) + 
                    monatlicheEinlage * (Math.pow((1 + monatlicheZinsrate), gesamtMonate) - 1) / monatlicheZinsrate;

    document.getElementById('ergebnis').innerText = 'Endbetrag nach ' + jahre + ' Jahren: CHF ' + endbetrag.toFixed(2);
}

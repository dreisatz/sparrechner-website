function berechneSparen() {
    var anfangsbetrag = document.getElementById('anfangsbetrag').value;
    var monatlicheEinlage = document.getElementById('monatlicheEinlage').value;
    var jahre = document.getElementById('jahre').value;
    var zinsrate = document.getElementById('zinsrate').value;

    var endbetrag = anfangsbetrag;
    var monatlicheZinsrate = (zinsrate / 100) / 12;

    for (var monat = 0; monat < jahre * 12; monat++) {
        endbetrag += monatlicheEinlage;
        endbetrag *= (1 + monatlicheZinsrate);
    }

    document.getElementById('ergebnis').innerText = 'Endbetrag nach ' + jahre + ' Jahren: €' + endbetrag.toFixed(2);
}

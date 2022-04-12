let szamol = () => {
    let gyermekek = document.getElementById("gyermekek").value;
    let felnottek = document.getElementById("felnottek").value;
    let osszeg;

    if (gyermekek < 0 || felnottek < 0 || gyermekek % 1 != 0 || felnottek % 1 != 0) {
        alert("A megadott érték nem egész szám! A létszám legyen legalább 0");
    } else {
        osszeg = gyermekek * 28000 + felnottek * 40000;
        document.getElementById("result").innerHTML = osszeg;
        document.getElementById("alert").classList.add('show');
    }
}
const date = new Date();
let hour = date.getHours();
if (hour < 19 && hour > 5) {
    document.getElementById('open').id = "close";
    document.getElementById('close').innerHTML = "<h1>CLOSE</h1><span><p>Ouverture de 19h30 à 05h00 du matin</p></span>";
} else {
    document.getElementById('open').id = "open";
    document.getElementById('open').innerHTML = "<h1>OPEN</h1><span><p>Ouvert jusqu'à 05h00 du matin</p></span>";
}

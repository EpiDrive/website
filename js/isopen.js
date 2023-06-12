const date = new Date();
let hour = date.getHours();
if (hour < 19 && hour > 5) {
    document.getElementById('open').id = "close"; 
}
else {
    document.getElementById('open').id = "open"
}
if (document.getElementById('close')){
    document.getElementById('close').innerHTML = "<h1>CLOSE</h1>"
}
else if (document.getElementById('open')){
    document.getElementById('open').innerHTML = "<h1>OPEN</h1>"
}


const http = new XMLHttpRequest();
const url = 'localhost:8080/test';

http.open("GET", url);
http.send();

http.onreadystatechange = (e) => {
    console.log(http.responseText);
}
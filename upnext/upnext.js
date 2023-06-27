let position = 0;


let lines = [];
let xhr = new XMLHttpRequest();
xhr.open('GET', 'upnext.txt', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            lines = xhr.responseText.split(/\r?\n/);
            console.log(lines);
        }
    }
}
xhr.send();


function loadText() {
    let currentLine = questions[position];
    let upNextContainer = document.getElementById("up__next");
    upNextContainer.innerHTML = currentLine;
    position++;
}


function reverse() {
    position--;
    let currentLine = questions[position];
    let upNextContainer = document.getElementById("up__next");
    upNextContainer.innerHTML = currentLine;
}

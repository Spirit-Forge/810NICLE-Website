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
    if (currentLine == "CLEAR") {
        typewriter.deleteAll(10);
        typewriter.start();
        document.getElementById("position").innerText = position;
        position++;
        loadText();
    } else {
        typewriter.typeString(currentLine);
        typewriter.start();
        document.getElementById("position").innerText = position;
        position++;
    }
}


function reverse() {
    let replacement = document.getElementById("positionInput").value;
    position = parseInt(replacement);
    typewriter.deleteAll(10);
    typewriter.start();
    loadText();
}

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
    let currentLine = lines[position];
    let upNextContainer = document.getElementById("up__next");
    // If currentLine is LONGER than 20 characters, make sure up__next element is a MARQUEE, not a P.
    if (currentLine.length > 20) {
        upNextContainer.innerHTML = "<marquee>" + currentLine + "</marquee>";
    } else {
        upNextContainer.innerHTML = currentLine;
    }
    position++;
}


function reverse() {
    position--;
    let currentLine = lines[position];
    let upNextContainer = document.getElementById("up__next");
    // If currentLine is LONGER than 20 characters, make sure up__next element is a MARQUEE, not a P.
    if (currentLine.length > 20) {
        upNextContainer.innerHTML = "<marquee>" + currentLine + "</marquee>";
    } else {
        upNextContainer.innerHTML = currentLine;
    }
}


// Call loadText() one second after the page loads.
setTimeout(loadText, 1000);


// Control using arrow keys.
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        reverse();
    } else if (e.keyCode == '39') {
        loadText();
    }
}
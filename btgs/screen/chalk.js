// Initialize typewriter and position.
let typewriter = new Typewriter('#q1', {
    autoStart: false,
    delay: 25
});
let position = 0;


let questions = [];
let xhr = new XMLHttpRequest();
xhr.open('GET', 'questions.txt', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            questions = xhr.responseText.split(/\r?\n/);
            console.log(questions);
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


/*
function reverse() {
    position = position - 4;
    typewriter.deleteAll();
    typewriter.start();
    loadText();
}
*/


function reverse() {
    let replacement = document.getElementById("positionInput").value;
    position = parseInt(replacement);
    typewriter.deleteAll(10);
    typewriter.start();
    loadText();
}


function clearEverything() {

}
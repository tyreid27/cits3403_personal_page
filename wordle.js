//var cell = -1;
//var row = 0;
//var guessWord = "";




/*function keyInput(e) {
    if (e.key.match(/^[a-z]$/)) {
        guessWord += e.key;
        cell += 1;
        if (cell == 5) {
            row += 1;
            cell = -1;
        } else {
            document.getElementById("wTable").rows[row].cells[cell].innerHTML = e.key;
        }
    }
    if (cell == 5) {

    }
}

window.onload = function() {
    var guess = []
    guess = wordle("scope", "scoop");

    window.addEventListener("keydown", keyInput);
} */

function main() {
    var guess = document.getElementById('guess').value;
    console.log(guess);
    var wordResult = [];
    wordResult = wordle("scope", guess);

    var tableData = [];

    //Print user's guess after submitting
    const userGuess = document.getElementById('word')

    let table = document.createElement("table");
    let trow = document.createElement("tr");
    let tdata1 = document.createElement("td");
    tdata1.innerHTML = guess[0]
    let tdata2 = document.createElement("td");
    tdata2.innerHTML = guess[1]
    let tdata3 = document.createElement("td");
    tdata3.innerHTML = guess[2]
    let tdata4 = document.createElement("td");
    tdata4.innerHTML = guess[3]
    let tdata5 = document.createElement("td");
    tdata5.innerHTML = guess[4]

    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    trow.appendChild(tdata3);
    trow.appendChild(tdata4);
    trow.appendChild(tdata5);
    table.appendChild(trow);
    
    tableData = [tdata1, tdata2, tdata3, tdata4, tdata5];
    
    for (let i = 0; i < 5; i++) {
        if (wordResult[i] == 2) {
            tableData[i].setAttribute('class', 'wordleCP');
        }
        if (wordResult[i] == 1) {
            tableData[i].setAttribute('class', 'wordleWP');
        }
        if (wordResult[i] == 0) {
            tableData[i].setAttribute('class', 'wordleNO');
        }
    }

    table.setAttribute('class', 'wordleTable');

    document.body.insertBefore(table, userGuess);
    
}

function wordle(target, guess) {
    const positions = ["first", "second", "third", "fourth", "fifth"];
    var wordGuess = [];
    let position = 0;
    for (let i = 0; i < guess.length; i++) {
        let frequency = 0;
        let letterCorrect = false;
        for (let j = 0; j < target.length; j++) {
            if (guess[i] == target[j]) {
                frequency += 1;
                if (j == position) {
                    wordGuess[position] = 2;
                    letterCorrect = true;
                    break;
                } 
            }
        }
        if (frequency == 1 && letterCorrect == false) {
            wordGuess[position] = 1;
        }
        else if (letterCorrect == false) {
            wordGuess[position] = 0;
        }
        position += 1;
    }
    return wordGuess;
}
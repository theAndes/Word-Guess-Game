
//random word//
var wordList = ['word', 'guess', 'game', 'web', 'austin', 'debug', 'development', 'full', 'stack']
var word = wordList[Math.floor(Math.random() * wordList.length)];
var hiddenWord = [];
console.log(word);
var tries = word.length + wordList.length;
var endTries = 0;
var guessedLetters = [];
var win = 0;
var lose = 0;


//create hidden word

function startGame() {
    for (let i = 0; i < word.length; i++) { //create the '_' in html
        hiddenWord[i] = "__";
        document.getElementById('tries').innerHTML = tries;
        console.log(hiddenWord);
        document.getElementById('word').innerHTML = hiddenWord.join(' ');
    }
};

function hiddenValue(arr, val,answer) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return answer == val;
        }
    }
    return false;
}



startGame();
document.onkeyup = function (game) {

    if (game.keyCode >= 65 && game.keyCode <= 90) {
        var userInput = game.key;

        for (var i = 0; i < word.length; i++) {
            if (word[i] === userInput) {
                hiddenWord[i] = userInput;
            }
            
        }



        // for (let i = 0; i < word.length; i++) {

        //    if (word[i] === userInput) {
        //         hiddenWord[i] = userInput;
        //    }
        //  }

        guessedLetters.push(userInput);
        document.getElementById('letters').innerHTML = guessedLetters;
        document.getElementById('word').innerHTML = hiddenWord.join(' ');

        console.log(userInput);
    }
    else {
        alert('Please enter a letter.');

    }
    document.getElementById('guesses').innerHTML = tries;
}


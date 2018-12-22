
//random word//
var wordList = ['word', 'guess', 'game', 'web', 'austin', 'debug', 'development', 'full', 'stack']
var word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);

//empty array for "__"
var hiddenWord = [];

//placeholder for letters guessed
var guessedLetters = [];

//stats
//Tries are dynamic for each word
var win = 0;
var lose = 0;
var tries = word.length + wordList.length;







function startGame() {

    //create hidden word
    for (let i = 0; i < word.length; i++) { //takes the length of my random word and loops to populate empty array
        hiddenWord[i] = "__"; //empty array elements are being aded
        console.log(hiddenWord);
        document.getElementById('word').innerHTML = hiddenWord.join(' '); //puts the "__" in HTML where the ID = word. Join makes it look like a string but still acts like an array
    }
};

//clearout variables and restart game
function restart() {
    wordList = ['word', 'guess', 'game', 'web', 'austin', 'debug', 'development', 'full', 'stack']
    word = wordList[Math.floor(Math.random() * wordList.length)];
    hiddenWord = [];
    console.log(word);
    tries = word.length + wordList.length;
    guessedLetters = [];
    startGame()
}
//
startGame();
document.onkeyup = function (game) {

    /////////////////////////////////////innerHTML guess count
    document.getElementById('tries').innerHTML = word.length + wordList.length;

    /////////////////////function to check input and subtracts from the tries/////    
    function hiddenValue() {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === userInput) {
                return true
            }
        }
        return tries--;
    }
    //////////////////////////////////////////////////////////////
    /////////////verify letters are chosen
    if (game.keyCode >= 65 && game.keyCode <= 90) {
        //set the user Input and lowerCase inputs
        var userInput = game.key.toLowerCase();
        //function to decrement tries
        hiddenValue();
        ///correct inputs replace elements in hiddenWord array
        for (var i = 0; i < word.length; i++) {
            if (word[i] === userInput) {
                hiddenWord[i] = userInput;
            }
        }


        document.getElementById('word').innerHTML = hiddenWord.join(' ');
        guessedLetters.push(userInput);
        document.getElementById('letters').innerHTML = guessedLetters;

        //console.log(userInput);//
    }
    else {
        alert('Please enter a letter.');

    }

    if (tries == 0) {
        lose++;
        document.getElementById('loses').innerHTML = lose;
        alert("You are out of guesses! Here's a new word!")
        restart();
        console.log(lose);

    }
    document.getElementById('guesses').innerHTML = tries;
}



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







var tries = word.length + 2;
function startGame() {
    
    document.getElementById('tries').innerHTML = tries;
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
    tries = word.length+2;    
    guessedLetters = [];
    startGame()
}
//
startGame();
document.onkeyup = function (game) {

    /////////////////////////////////////innerHTML guess count

    /////////////////////function to check input and subtracts from the tries/////    
    /////////////////////function was redundant/////    

    //function hiddenValue() {
    //    for (var i = 0; i < word.length; i++) {
    //        if (word[i] === userInput) {
    //            return true
    //        }
    //    }
    //    return tries--;
   // }
    //////////////////////////////////////////////////////////////
    /////////////verify letters are chosen
    if (game.keyCode >= 65 && game.keyCode <= 90) {
        //set the user Input and lowerCase inputs
        var userInput = game.key.toLowerCase();
        //function to decrement tries
        //hiddenValue();
        ///correct inputs replace elements in hiddenWord array
        if (word.indexOf(userInput)!== -1) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === userInput) {
                hiddenWord[i] = userInput;
            }
        }
        document.getElementById('word').innerHTML = hiddenWord.join(' ');
        }
        else{
            if(guessedLetters.indexOf(userInput) !== -1){
            alert('You already tried: ' +userInput)
                
            }
           else{ 
            tries--;   
            guessedLetters.push(userInput);
        }
    }
        //console.log(userInput);//
    }
    else {
        alert('Please enter a letter.');
        
    }
    
    if (tries == 0) {
        lose++;
        alert("You are out of guesses! Here's a new word!")
        restart();
        console.log(lose);
        document.getElementById('loses').innerHTML = lose;
        alert("Looks like you didn't get the word :(");
    }
    if(tries > 0 && hiddenWord.indexOf('__') == -1 ){
        win++
        document.getElementById('wins').innerHTML = win;
        alert("Congratulations, You did it! The word you got was: "+ word.toUpperCase() );
        restart();
        console.log(win);

    }
    
    document.getElementById('letters').innerHTML = guessedLetters;
    document.getElementById('guesses').innerHTML = tries;
}


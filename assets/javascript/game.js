


//list of words for game//
let wordList = ['word','guess','game','web','Austin','debug']


//random word//
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);


//split the random word characters into a list//
let wordItems = word.split('')
console.log(wordItems);



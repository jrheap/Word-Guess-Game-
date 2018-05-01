// Global variables
var wordOptions = ["washington","california","florida","illinois","ohio","oregon","texas","michigan","colorado","georgia","missouri","pennsylvania","new york","kentucky","tennesse"];
var selectedWord = "";
var letterinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;
// Functions
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // what is .split??
    letterinWord = selectedWord.split("");
    numBlanks = letterinWord.length;

    guessesLeft = 12;
    // why the blank []
    wrongLetters = [];
    blanksAndSuccesses = [];

    // What the heck is going on here?? adds the _ _ _ _
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses[" "];

    // great way to check your code
console.log(selectedWord);
console.log(letterinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

// Main process
// calls the function
startGame();
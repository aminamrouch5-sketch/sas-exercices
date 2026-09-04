var prompt = require('prompt-sync')();
let letter = prompt('insert un lettre : ')
const asciiValue = letter.charCodeAt(0);
console.log(asciiValue)
if (asciiValue>=65 || asciiValue<=90){
    console.log('Majuscule')
}else {
    console.log('Miniscile')
}

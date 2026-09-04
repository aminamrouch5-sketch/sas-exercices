var prompt = require('prompt-sync')();
const word = prompt('entré une mot : ');
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowcase = "abcdefghijklmnopqrstuvwxyz"
let UpperCase = "";
for (i in word){
    for(j in lowcase){
        if(word[i]===lowcase[j])
        {UpperCase += alphabet[j]}
    }
}
console.log(UpperCase)
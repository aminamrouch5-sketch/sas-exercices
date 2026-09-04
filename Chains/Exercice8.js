var prompt = require('prompt-sync')();
const word = prompt('entré une mot : ');
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowcase = "abcdefghijklmnopqrstuvwxyz"
let UpperCase = "";
for (i in word){
    for(j in alphabet){
        if(word[i]===alphabet[j])
        {UpperCase += lowcase[j]}
    }
}
console.log(UpperCase)
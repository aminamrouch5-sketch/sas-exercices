var prompt = require('prompt-sync')();
const word = prompt('enté des motes : ');
let clean_space="";
for (i in word){
    if (word[i]!==" "){
        clean_space+=word[i]
    }
}


console.log(clean_space)
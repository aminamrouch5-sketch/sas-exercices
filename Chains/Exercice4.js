var prompt = require('prompt-sync')();
function Comparesnet(word1,word2){
    if (word1==word2){
    console.log("succés")
    }
    else{
    console.log('na pa le meme ')
}
}
let word1 = prompt('entré un word : ');
let word2 = prompt('entré une autor word ')
Comparesnet(word1,word2)
var prompt = require('prompt-sync')();
let word = prompt('entré word');
function leng(word){
let len = 0;
for (i in word){
    len++
    }
    console.log(len)
}
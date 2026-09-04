var prompt=require('prompt-sync')();
let word = prompt('donné moi un mot : ');
function inverse(word){
    let inverse = "";
let len=0;
for (i in word){
    len++
    }
for (i=len-1;i>=0;i--){
    inverse += word[i]
}
console.log(inverse)
}
inverse(word)
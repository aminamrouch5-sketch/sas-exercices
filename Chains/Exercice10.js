const prompt = require('prompt-sync')();
let word = prompt('entré ton word : ');
let substring = prompt('entré substring : ')
let existe = "";
let len = 0 ;
let sublen = 0 ;
let index =0;
for (i in word){
    len++
    }

for (i in substring){
    sublen++
}

for (let i=0;i<=len-1;i++)
{
    if (index==sublen)
        {
            break
        }else{
    for(k=0;k<=0;k++){
        if (word[i]==substring[k]){
            existe+=`${substring[k]}`
            index++
            break
        }else {
            existe ="";
            index = 0;
        }
    }
    console.log(existe)
}}
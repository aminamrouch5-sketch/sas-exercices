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

    for (let j=0;j<=sublen-1;j++){
        if (index==sublen){
            break
        }else{
            if (substring[j]==word[i]){
                existe += substring[j]
                index++
            }else {    
                existe="";
                index = 0    
            }
        }
    
    }
    }
console.log(existe)
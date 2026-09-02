var prompt = require('prompt-sync')();
const num = String(prompt('entré le number qui tu inversé : '))
const leng = num.length;
let res = "";
for(i=leng-1;i>-1;i--){
    res+=num[i];
}
console.log(`reversed number = ${res}`);
var prompt=require('prompt-sync')();
const num = Number(prompt('entré le numero : '));
let result=0;
for (let i=0;i<=num;i++){
    result+=i
    
}
console.log(`${result}`)
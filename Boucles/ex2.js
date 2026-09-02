var prompt = require('prompt-sync')();
const num = Number(prompt('entre le numero : '));
let factoriele = 1;
for (let i=1;i<=num;i++){
    factoriele*=i
 console.log(`${factoriele}`)
}

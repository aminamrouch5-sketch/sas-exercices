const prompt = require('prompt-sync')();
const num = Number(prompt('entré le number des pairs numbers : '));
let index=0;
for (let i=0;index<num;i++){
    if (i % 2 == 0){
        console.log(`${i}`);
        index++
    }
}

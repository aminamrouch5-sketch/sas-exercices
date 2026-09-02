var prompt = require('prompt-sync')();
const num = Number(prompt('entre le numero '));




for (let i = 1;i<=num;i++){
    if (i % 2 !==0){
        console.log(i)
    }
}

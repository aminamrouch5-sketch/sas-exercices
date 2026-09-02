var prompt = require('prompt-sync')();
const num = Number(prompt('entre le number : '))
let m=0;
let result=0;
while (m!=10){
    m++;
    result = num * m ;
    console.log(`${num} x ${m} =${result} `)
}

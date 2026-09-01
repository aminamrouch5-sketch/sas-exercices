var prompt = require('prompt-sync')();
const a = parseInt(prompt('donner moi le premier number :'));
const b = parseInt(prompt('donner moi le deuxieme number :'))
let op1 = a + b;
let op2 = a - b;
let op3 = a * b;
let op4 = a / b;
console.log(`OP1 : ${op1} | OP2 : ${op2} | OP3 : ${op3} | OP4 : ${op4}`) 
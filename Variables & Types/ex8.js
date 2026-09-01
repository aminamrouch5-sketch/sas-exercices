var prompt = require('prompt-sync')();
const a = Number(prompt("enter the first number : "));
const b = Number(prompt("enter the second number :"));
const c = Number(prompt("enter the last number : "));
console.log(`Moyenne géométrique : ${(a*b*c)^(1/3)}`)
var prompt = require('prompt-sync')();
const year = prompt("combien d'anné tu peux changé ? : ")
const choice = prompt("insert the choice sois seconds , hours , days , months : ")
let sum;
switch (choice){
    case choice=="months":
        sum = year * 365 / 12
    case choice=="days":
        sum = year * 365
    case choice =="hours":
        sum = year * 365 * 24
    case choice == "minutes":
        sum = year * 365 * 24 * 60 
    case choice == "seconds":
        sum = year * 365 * 24 * 60 * 60
    
}
console.log(`${choice} : ${sum}`)
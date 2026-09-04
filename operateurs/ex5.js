var prompt = require('prompt-sync')();
const year = prompt("combien d'anné tu peux changé ? : ")
const choice = prompt("insert the choice sois seconds , hours , days , months : ")
let sum;
switch (choice){
    case choice=="months":
        sum = year * 365 / 12
        break;
    case choice=="days":
        sum = year * 365
        break;
    case choice =="hours":
        sum = year * 365 * 24
        break;
    case choice == "minutes":
        sum = year * 365 * 24 * 60
        break;
    case choice == "seconds":
        sum = year * 365 * 24 * 60 * 60
        break;
    
}
console.log(`${choice} : ${sum}`)

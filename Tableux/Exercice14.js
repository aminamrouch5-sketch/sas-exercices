var prompt = require('prompt-sync')();
const index = prompt('how many numbers you want to entré : ')
const numbers = [];
let I = 0;

Calc(index)
Moyenne(numbers,I)

function Calc(index){
    for(let i = 0; i<index;i++){
        numbers[i] = parseInt(prompt('entré un entier number : '))
    }
}

function Moyenne(numbers,I){
    for (i of numbers){
        I+=i
    }
    console.log(`Moyenne est : ${I}`)
}


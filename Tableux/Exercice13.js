var prompt = require('prompt-sync')();
const index = prompt('how many numbers you want to entré : ')
const numbers = [];
let I = 0;
let Pair=[];
Calc(index)
OnlyImpair(numbers,I)
function Calc(index){
    for(let i = 0; i<index;i++){
        numbers[i] = parseInt(prompt('entré un entier number : '))
    }
}

function OnlyImpair(numbers,I){
    for (i of numbers){
        if (i % 2 !== 0){
         Pair[I]=i;
         I++

        }
    
    }
 console.log(`Pair Numbers : ${Pair}`)}
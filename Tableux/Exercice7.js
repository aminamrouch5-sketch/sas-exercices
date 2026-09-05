var prompt = require('prompt-sync')();
const index = prompt('how many numbers you want to entré : ')
const numbers = [];
let orginzed=[];
function Calc(index){
    for(let i = 0; i<index;i++){
        numbers[i] = parseInt(prompt('entré un entier number : '))
        console.log(numbers)
    }
}

function Simple(numbers){

    for(let i=0;i<numbers.length;i++){
        let a = 0;
        let b = 0;
        for(let j=0;j<numbers.length;j++){
            a = numbers[i];
            b = numbers[i+j];
            if (numbers[i]>numbers[j+i]){
               numbers [i] = b;
               numbers [i+j] = a;
            }
            
        }


        }
        console.log(numbers)
        
    }


Calc(index);
Simple(numbers)

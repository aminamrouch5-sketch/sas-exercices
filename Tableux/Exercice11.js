var prompt = require('prompt-sync')();
const index = Number(prompt('how many index in tableau : '))
const numbers = [];
const thecopie = [];
Calc(index);
const valeur = Number(prompt('entré le valeur qui tu changé : '))
const R = Number(prompt('la valeur remplacé : '))
Replace(numbers,valeur,R)

function Replace(numbers,valeur,r){
    for(i in numbers){
        if(numbers[i]==valeur){
            numbers[i]=R;
        }
    }
    console.log(numbers)
}

function Calc(index){
    for(let i = 0; i<index;i++){
        numbers[i] =Number(prompt('entré des data in tableu : '))
        console.log(numbers)
    }
}
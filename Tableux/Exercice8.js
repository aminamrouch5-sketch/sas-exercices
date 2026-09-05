var prompt = require('prompt-sync')();
const index = prompt('how many index in tableau : ')
const numbers = [];
const thecopie = [];
Calc(index);
Copie(numbers)
function Calc(index){
    for(let i = 0; i<index;i++){
        numbers[i] =prompt('entré des data in tableu : ')
        console.log(numbers)
    }
}
function Copie(numbers){
    k=-1;
    for(i of numbers){
        k++
        thecopie[k]=i
    }
    console.log(thecopie)
    

}
var prompt = require('prompt-sync')();
var index = prompt('quelle est index de tableau : ');
const numbers = []
function Calc(index){
let somme = 0;
for(i=0;i<=index-1;i++){
    numbers[i]=Number(prompt(`Order ${i+1} : `))
}
for (number of numbers){
    somme+=number;
   console.log(somme)}}
Calc(index)
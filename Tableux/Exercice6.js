var prompt = require('prompt-sync')();
const index =prompt('donné moi un nombre du nombres : ')
const f = Number(prompt('donné un facteur : '))
let numbers = []
function Calc(index,f){
    for (let i=0;i<=index;i++)
        {
        numbers[i]=Number(prompt(`entré Numero ${i}  : `)) 
        }
    for (i in numbers){
        console.log(`${numbers[i]} x ${f} = ${i*f}`)
    }}
    Calc(index,f)

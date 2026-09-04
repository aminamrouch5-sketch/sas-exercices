var prompt = require('prompt-sync')();
const index =prompt('donné moi un nombre du nombres : ')
let numbers = []
function Calc(index){
    for (let i=0;i<=index;i++)
        {
        numbers[i]=Number(prompt(`entré Numero ${i}  : `)) 
        }
    let save = numbers[0];
    
        
    for (i in numbers){
        if(save>numbers[i]){
            save = numbers[i]
        }
            
        
        
    }
    console.log(save)                    }
    Calc(index)

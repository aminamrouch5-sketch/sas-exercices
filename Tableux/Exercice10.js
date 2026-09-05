var prompt = require('prompt-sync')();
const index = Number(prompt('how many index in tableau : '))
const words = [];
const searchword = prompt('entré le word : ')
let isFound = true;

Calc(index)
Search(words)
function Calc(index){
    for(let i = 0; i<index;i++){
        words[i] =prompt('entré des data in tableu : ')
    
    }
}
function Search(words){
    for (i in words){
        if (searchword==words[i])
           { console.log('Found')   
            isFound=true;
            }
        else{
            isFound=false;
            }

        }
        if (isFound){
            console.log('Found');
        }
        else {
            console.log('Not Found')
        }
    }
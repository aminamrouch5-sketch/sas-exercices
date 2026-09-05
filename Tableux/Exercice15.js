var prompt = require('prompt-sync')();
const table1 = [];
const table2 = [];
const Main=[];

Calc(table1)
Calc(table2)
Merge(table1,table2)
function Calc(table){
    let index = Number(prompt('how many index in tableau : '))
    for(let i = 0; i<index;i++){
        table[i] =prompt('entré des data in tableu : ')
    
    }
}
function Merge(table1,table2){
    let index =0;
    for (i in table1){
        Main[index]=table1[i]
        index++

    }
    for ( i in table2){
        Main[index]=table2[i]
        index++
    }
    console.log(Main)
}
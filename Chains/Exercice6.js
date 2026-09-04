var prompt = require('prompt-sync')();
const word = prompt('entré une mot un text : ')
const alphabat = prompt ('enté une alphabet pour searché : ')
let fois = 0 ;
for (i in word){
    if (word[i]==alphabat){fois++

    }
}
console.log(`le alphabet ${alphabat} appearé : ${fois} fois `)

var prompt = require('prompt-sync')();
const informations = []
const name = prompt("comment tu t'appelle : ")
const age = prompt("ton age est : ")
function Creation(name,age,id){
    informations[0]=name;informations[1]=age;

    console.log(informations)
}
Creation(name,age)
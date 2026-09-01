var prompt = require('prompt-sync')();

// les inputs qui appearent de le user
const name = prompt("comment tu t'appelle : ");
const age = prompt("quelle est votre age : ");
const sex = prompt("quelle est ton sex : ");
const email = prompt("quelle est ton email : ");
// output of user
console.log(`  name: ${name}
               age: ${age}   
               sex: ${sex}
               email: ${email}`)




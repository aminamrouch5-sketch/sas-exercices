var prompt = require('prompt-sync')();
const longeur = Number(prompt('donner moi la longeur : '));
const largeur = Number (prompt('Donner moi la largeur : '));
console.log(`Surface = ${longeur*largeur}`)

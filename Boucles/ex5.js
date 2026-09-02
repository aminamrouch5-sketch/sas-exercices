const prompt = require('prompt-sync')();
const base = Number(prompt('entre a base numero : '));
const exposent = parseInt(prompt('entre a exposent numero : '));
for (i=1;i<exposent;i++){
    console.log(`${base**i}`)
}
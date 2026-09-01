var prompt = require('prompt-sync')();
const num = Number(prompt("donner un number"));
if (num>0){
    console.log('Positif')
}else if (num==0){
    console.log('null')
}else{
    console.log('Négatif')
}

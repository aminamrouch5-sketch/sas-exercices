const prompt = require('prompt-sync')();
const row = prompt('entre les lignes dans le pyramid : ')
function Pyramid(row){
  for(let i=1;i<= row;i++){
    let string="";
  
    for(let j=0;j<=row-i;j++){
      string+=" ";
    }
    for(let k=1;k<=(i*2)-1;k++){
      string+="*";
    }
    console.log(string)
  }
}
Pyramid(row);

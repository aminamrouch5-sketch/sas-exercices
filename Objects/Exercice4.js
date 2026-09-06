var prompt = require('prompt-sync')();
let x = 4.25;
let y = 5;
let Structure = {}



function Write(x,y){
    structure={"x":x,"y":y}
}


function Change(){
    let first = Number(prompt("What you want to change on position x : "))
    let second = Number(prompt("What you want to change on pisition y : "))
    structure.x=first;
    structure.y=second
    console.log(structure)
}

Write(x,y)
Change()

var prompt=require('prompt-sync')();
const z1 = Number(prompt("enter the z1 number : "));
const z2 = Number(prompt("enter the z2 number : "));
const x1 = Number(prompt("enter the x1 value : "));
const x2 = Number(prompt("enter the x2 value : "));


let Distance = Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2);
console.log(`Distance : ${Distance}`)

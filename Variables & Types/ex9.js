var prompt=require('prompt-sync')();
const z1 = Number(prompt("enter the z1 number : "));
const z2 = Number(prompt("enter the z2 number : "));
const x1 = Number(prompt("enter the x1 value : "));
const x2 = Number(prompt("enter the x2 value : "));


let Distance = Math.sqrt((x*2-x*1)**2+(y*2-y*1)**2+(z*2-z*1)**2);
console.log(`Distance : ${Distance}`)

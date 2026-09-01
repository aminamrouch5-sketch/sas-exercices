var prompt=require('prompt-sync')();
const a = prompt('enter a : ')
const b = prompt('enter b : ')
const c = prompt('enter c : ')
const delta = b**2-4*a*c;
if (delta>0){
    console.log(`x1 : ${(-b+Math.sqrt(delta))/2*a} | x2 : ${(-b-Math.sqrt(delta))/2*a}`)

}
else if (delta==0){console.log(`x : ${-b/(2*a)}`)}
else { console.log('no solution')}

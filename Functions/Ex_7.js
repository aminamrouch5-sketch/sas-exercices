function Fibonnaci(num){
let a = 0;
let b = 1;

for (let i = 0; i <= num; i++) {
    console.log(`F(${i}) = ${a}`);

    let next = a + b;
    a = b;
    b = next;
    }}
Fibonnaci(11)
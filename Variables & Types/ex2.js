var prompt = require('prompt-sync')();
// input de user pour obtenir la temperature on C
let C=prompt("Donné moi la temperature on Celsius");
// algorithm pour transfer Celsius a Kelvin et sauvage dans le var K
C=Number(C);
let K = C + 273.15;
// output
console.log(`KELVIN : ${K}`)
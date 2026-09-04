let num = 20
function printHexAndBinary(num) {
  console.log(`Decimal: ${num}`);
  console.log(`Hexadecimal: 0x${num.toString(16).toUpperCase()}`);
  console.log(`Binary: 0b${num.toString(2)}`);
}
printHexAndBinary(num)

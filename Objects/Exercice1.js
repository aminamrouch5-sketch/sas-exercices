var prompt = require('prompt-sync')();
let name = prompt("What is your name : ")
let last = prompt("What is your last name : ")
let age = prompt("How Old Are You : ")
const person = {
                "name":name,
                "last":last,
                "age":age
               }
console.log(person)
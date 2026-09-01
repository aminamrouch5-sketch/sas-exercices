var prompt = require('prompt-sync')();
// prompt recommand la distance on km depuis user
var prompt = require('prompt-sync')();
const distance = prompt(' donner moi la distance on Kilometre : ');
const Yards = distance * 1093.61;
console.log(` Yards : ${Yards}`)
var prompt = require('prompt-sync')();
const C = prompt("demande la temperature de l'eau : ");
if (C<=0)
    {
    console.log("l'eau : solide ")
    }else if(C>0 && C<100)
    {
    console.log("l'eau : liqude")
    }else
    {
    console.log("l'eau : Gaz ")
    }

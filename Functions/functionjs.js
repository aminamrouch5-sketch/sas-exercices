var prompt = require('prompt-sync')();
const Calculatrice =  {Somme:
                       function(x,y){
                       let result = x + y;
                       console.log(`${x} + ${y} = ${result}`)
                },
                      Soustraction:
                      function(x,y){
                        let result = x - y;
                        console.log(`${x} - ${y} = ${result}`)
                },
                      Multiplication:
                      function(x,y){
                      let result = x * y;
                      console.log(`${x} x ${y} = ${result}`)
                },
                      Dévision:
                      function(x,y){
                        let result = x / y;
                        console.log(`${x} / ${y} = ${result}`)
                      }}
                    var start = "true"
        while (start){
            try{
        console.log('Press any key pour exité ')
        const order = String(prompt('entré ton order mr : + | - | / | * '))
        const num1 = Number(prompt('entré le numero : '))
        const num2 = Number(prompt('entré le deuxieme numero :'))
        
        switch(order){
            case "+":
                Calculatrice.Somme(num1,num2)
                break
            case "-":
                Calculatrice.Soustraction(num1,num2)
                break
            case "/":
                Calculatrice.Dévision(num1,num2)
                break
            case "*":
                Calculatrice.Multiplication(num1,num2)
                break
            default :
                console.log('have a nice day ')  
                start=false
                break
                }}
        catch{console.log('try again ...')}
            }
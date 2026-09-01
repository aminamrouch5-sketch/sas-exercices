var prompt = require('prompt-sync');
while (true){
    try{
const number = Number('Donner moi un number');
if (number % 2 === 0){
    console.log('pair')
}else{
    console.log('impair')
}

    }catch{console.log('error')}
}
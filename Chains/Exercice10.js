var prompt = require('prompt-sync')();
const phrase = prompt('write the phrase : ');
const substring = prompt('write the substring : ');

let len1 = len(phrase);
let len2 = len(substring);


sub(len1, len2, phrase, substring);

function len(x){
    let l = 0;
    let string="";
    for(i in x){
        l++;
    }
    return l;
}
function sub(len1,len2,phrase,substring){
    let isFound = false;
    for(let i=0;i<=len1;i++){

        let match = true;

        for(let j=0;j<=len2;j++){

            if(phrase[i+j]!==substring[j]){
                let match = false;
                break
            }
            
        }
        
        if (match){
                isFound = true;
                break
            }

    }
    if (isFound){
        console.log("its there ")
    }
    else{
        console.log("it's not there ")
    }
    
}

var prompt = require('prompt-sync')();
let name = prompt("What is name of student : ")
let last = prompt("What is lastname of student  : ")
let age = prompt("How Old Are the name of student")
let notes = []
for (let i=0;i<3;i++){
    switch(i){
        case 0:
            notes [i]= "Math :"+prompt("ecriver les notes : ")
            break
        case 1:
            notes [i]="Science :"+prompt("ecriver les notes : ")
            break
        case 2:
            notes [i]= "Sport : "+prompt("ecriver les notes : ")
            break


    }
}


students={
            "name":name,
            "last":last,
            "age":age,
            "notes":notes
         }

console.log(students)
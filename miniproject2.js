var prompt = require('prompt-sync')();
const Contacts = [];
let id = 0;
start = true;
let i = 0;

const Manage = {
                    AddContact:function()
                                        {
                                            let Name = prompt("entre ton name : ");
                                            let email = prompt("entre ton email please : ");
                                            let phone = prompt("entre ton phone number : ");
                                            Contacts[id]={
                                                            "name":Name,
                                                            "email":email,
                                                            "phone":phone
                                                         }
                                            console.log(`Name : ${Name} | email : ${email} | phone : ${phone}`)
                                            id++
                                        },
    
                    ShowContact:function()
                                        {
                                        console.log(Contacts)
                                        },

                    ModiferContact:function()
                                        {   let isFound=false;
                                            let Name = prompt("entre le nom de contact tu peux change : ");
                                            for(i in Contacts){
                                                if (Name==Contacts[i].name){
                                                    isFound=true;
                                                    let order = prompt("tu peux change [NAME][PHONE][EMAIL][TOUS] ?? :  ").toUpperCase().trim();
                                                    switch(order){
                                                        case "NAME":
                                                            Contacts[i].name=prompt("insert votre nouveau name : ");
                                                            break;
                                                        case "PHONE":
                                                            Contacts[i].phone=prompt("insert votre nouveau phone : ")
                                                            break;
                                                        case "EMAIL":
                                                            Contacts[i].phone=prompt("insert votre nouveau email : ")
                                                            break;
                                                        case "TOUS":
                                                            Contacts[i].name=prompt("insert votre nouveau name : ");
                                                            Contacts[i].phone=prompt("insert votre nouveau phone : ");
                                                            Contacts[i].email=prompt("insert votre nouveau email : ");
                                                            console.log("****** OPERATION VALIDE********")
                                                            break;
                                                        default:
                                                            console.log("TRY AGAIN")
                                                    }
                                                }
                            
                                            }   
                                            if(!isFound){
                                                console.log("NOT FOUND")
                                            }
                                        },

                        DeleteContact:function()
                                        {
                                            let isFound=false;
                                            let Name = prompt("insert le contract nom tu peux suppremier : ");
                                            for(i in Contacts){
                                                if (Name==Contacts[i].name){
                                                    Contacts.splice(i,1)
                                                    isFound=true;
                                                    break
                                                }
                                            }
                                            if(!isFound){
                                                console.log("NOT FOUND")
                                            }
                                        },

                        SearchContact:function()
                                    {   
                                        let isFound=false;
                                        let Name = prompt("insert le contract nom tu peux search : ")
                                        for (i in Contacts){
                                            if(Name==Contacts[i].name){
                                                console.log(Contacts[i]);
                                                isFound=true;
                                                    break
                                            }
                                            
                                        }
                                        if(!isFound){
                                                console.log("NOT FOUND")
                                            }
                                    }

                }


while(start){
    console.log("POUR QUITTE LE PROGRAME : [EXIT]")
    let order = prompt('Bonjeur , insert votre command : [ADD][EDIT][DELETE][SHOW][SEARCH] ')
    switch(order){
        case "ADD":
            Manage.AddContact();
            break;
        case "EDIT":
            Manage.ModiferContact();
            break;
        case "DELETE":
            Manage.DeleteContact();
            break;
        case "SHOW":
            Manage.ShowContact();
            break;
        case "SEARCH":
            Manage.SearchContact();
            break;
        case "EXIT":
            console.log("BON COURAGE BYE...")
            start=false;
            break;
        default:
            console.log("*** MAUVAIS COMMAND ***")
            break;

    }
}
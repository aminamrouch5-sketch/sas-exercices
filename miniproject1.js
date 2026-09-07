var prompt = require('prompt-sync')();
const Livres = [];
var id=0;
let start = true;
var i=0;
const Manage = {
        // Livre:{},
        
        AddLivre:function(){
                    let title = prompt("entre le nom de livre : ");
                    let author = prompt("entre le nom de l'author : ");
                    let prix = Number(prompt("entre le prix de livre : "))
                    let quantity = parseInt(prompt("entre la quantity qui il est dans sa livre : "))
                    Livres[id]={"title":title,"author":author,"prix":prix,"quantity":quantity,"id":id}
                    id++
                    },

        ShowLivres:function(){
                    let sum=0;
                    let quan=0;
                    for(i in Livres){
                        sum++
                    }
                    for (i in Livres){
                        quan += Livres[i].quantity
                    }
                    console.log(`Livres : ${sum} Registred Livre | Quantity : ${quan} Copies Avaiable `)
                },

        SearchLivres:function(){
                 let Title = prompt("insert la title de livre pour search : ");
                 let found = false;
                 for(i in Livres){
                    if(Title==Livres[i].title){
                        console.log(Livres[i])
                        found = true;
                        break
                    }         

                 }
                 if (!found){
                    console.log("*** NOT FOUND ***")
                 }
        },

        DeleteLivre:function(){
            let Found=true;
            let Title = prompt("insert la title de livre tu as suprimer : ")
            for(i in Livres){
                if(Title==Livres[i].title){
                    console.log(Livres[i])
                    console.log("*** DELETED ***")
                    Livres.splice(i,1)
                    break
                    }
                    else{
                        Found=false;
                    }
            

                }
                if (!Found){
                    console.log('Not Found')
                }
            },
        EditLivre:function(){
            let found = false;
            let Title = prompt("insert la title de livre tu doit change sa quantity : ")
            for(i in Livres){
                if(Title==Livres[i].title){
                    let quantity = parseInt(prompt("Change The Quantity : "))
                    Livres[i].quantity=quantity;
                    found=true;
                    break;
                }
            }
            if(!found){
                console.log('not found')
            }
        }
        
    }

while(start){
    try
        {
            console.log("========================LIBRARY v1==================================")
            console.log("if you wanna exit insert : EXIT")
            let order = prompt("Choose The Order Please [ADD,SEARCH,DELETE,SHOWALL,EDIT]  :    ").toUpperCase().trim();
            switch(order){
                case "ADD":
                    Manage.AddLivre();
                    break;
                case "EDIT":
                    Manage.EditLivre();
                    break;
                case "SEARCH":
                    Manage.SearchLivres();
                    break;
                case "DELETE":
                    Manage.DeleteLivre();
                    break;
                case "SHOWALL":
                    Manage.ShowLivres();
                    break;
                case "EXIT":
                    start=false;
                    console.log("Bye...")
                    break;
                default:
                    console.log("Please Try Again...")
                    break;
                         }
          }
    catch
         {
        console.error("There is an issue try again ... ")
         };
}
const { trips } = require('./Trajets.js')
const { places } = require('./Trajets.js')
var prompt = require('prompt-sync')();
const { tickets } = require('./Trajets.js')
let ticket_id = 10;
const DeletedIDs = [];
let chiffre_affaire =0;
let TicketNumber =10;
let index=0;








                                                        // Analyze Function For Caluclate the already of Tickets Number and Update Trips Places 
function Analyze(){
    for(i in tickets){
        for(let j=0;j<trips.length;j++){
            if (tickets[i].tripId==trips[j].id){
            trips[i].availableSeats--
            }
        }
    }
    for (i in tickets){
        for(let j=0;j<trips.length;j++){
            if(tickets[i].tripId==trips[j].id){
                chiffre_affaire+=tickets[i].price
            }
        }
    }
}
Analyze()
// Functions Object : this objects contains all Functions of Showing Manupilation Data... | THE ENGINE OF PROJECT
const Manage = {
    Afficher:function(){
        console.log("===============TRAJECTS DISPONSIBLE===============\n\n")
        for(let i=0; i<trips.length;i++){                                           // loops into all trips objects and show all data of trips
            if (trips[i].availableSeats>0){
        console.log('=======================================================================')
        console.log(`|  #${trips[i].id} | departure : ${trips[i].departure} | destination : ${trips[i].destination}`)
        console.log(`| departureTime: ${trips[i].departureTime} | arrivalTime : ${trips[i].arrivalTime} | price : ${trips[i].price}`)
        console.log(`| avialableSeats : ${trips[i].availableSeats} `)
        console.log('=======================================================================\n\n')
      }
    }
},Achetter:function(){
        function AddNew(){                                                                                  // Add new Ticket Function 
            places[i].place++                                   
                      tickets[ticket_id]={"id":ticket_id+1,
                                "passengerName":name,
                                "tripId":trip,
                                "seatNumber":1,
                                "price":trips[i].price,
                                "place":places[i].place
                               }
                        trips[i].availableSeats--
                        console.log("===================TICKET SERSI VALIDIE=================")
                            console.log(
                    `
                    | TICKET #${tickets[ticket_id].id}                                 
                    | Passenger Name : ${tickets[ticket_id].passengerName}                  
                    | Seat Number    : ${tickets[ticket_id].seatNumber}       
                    | Price          : ${tickets[ticket_id].price}      
                    | tripID         : ${tickets[ticket_id].tripId}            
                    | Depart         : ${trips[tickets[ticket_id].tripId].departure}
                    | DepartureTime  : ${trips[tickets[ticket_id].tripId].destination}
                    |  Place         : ${tickets[ticket_id].place}

______________________________________________________________`)
                 chiffre_affaire+=tickets[ticket_id].price
                 ticket_id++
                 TicketNumber++                                                                         
                
        }





        let name = prompt("entré ton nom : ")
        // NAME INPUT VALIDATION
        if (name.length>15 || name.length<=7){
           return console.log('insert valid nom ')
            
        }
        let trip = parseInt(prompt("donne lid de trip : "))
        // IF TRIP INPUT IS NOT NUMBER WITH NUMBER FUNCTION WE SURE THAT IF USER NOT ENTRED NUMBER THE VAR WILL EQUALE "NaN"
        if (!isNaN(trip)){
            for (i in trips){
            if (trip==trips[i].id){
                if(trips[i].availableSeats>0){
                    if(DeletedIDs.length>0){
                        for (i in DeletedIDs){
                        if (trip==DeletedIDs[i].tripId){
                                tickets[ticket_id]={"id":ticket_id+1,
                                                    "passengerName":name,
                                                    "tripId":trip,
                                                    "seatNumber":1,
                                                    "price":trips[i].price,
                                                    "place":DeletedIDs[i].place,
                               }        
                                 trips[i].availableSeats--
                                console.log("===================TICKET SERSI VALIDIE=================")
                            console.log(
                    `
                    | TICKET #${tickets[ticket_id].id}                                 
                    | Passenger Name : ${tickets[ticket_id].passengerName}                  
                    | Seat Number    : ${tickets[ticket_id].seatNumber}       
                    | Price          : ${tickets[ticket_id].price}      
                    | tripID         : ${tickets[ticket_id].tripId}            
                    | Depart         : ${trips[i].departure}
                    | Destination    : ${trips[i].destination}
                    | Place          : ${tickets[ticket_id].place}
        
______________________________________________________________`)
        
                      DeletedIDs.splice(i,1)
                    index-- // ${trips[tickets[DisponsibleIDs[0]].tripId].destination}
                    chiffre_affaire+=tickets[ticket_id].price
                    ticket_id++
                    TicketNumber++
                    break
                }
            }
                            // => If The Loops Dosent trip.id is not equal of any deleted ids list it will Lunch the Function AddNew()
        }
        else{
            AddNew()      // =>  If The DeletedLists Length is Less then 1 it will auto function AddNew
        }
    }
        else    {
                    console.log('==============Pardon No Places aviable ...================')

                }
          
            }
           
        }
        
        }
        else
            {
            return console.log('insert valid id ...')
        }
        
        
},
AfficherTicket:function(){
    console.log(`================================TICKET TABLE================================`)
    for (i in tickets){
        console.log(`
    | TICKET #${tickets[i].id}
    |  Passenger Name : ${tickets[i].passengerName}
    |  Seat Number    : ${tickets[i].seatNumber}
    |  Trip ID        : ${tickets[i].tripId }
    |  Price          : ${tickets[i].price}
    |  Depart         : ${trips[tickets[i].tripId].departure}
    |  Destination    : ${trips[tickets[i].tripId].destination}
    |  Place          : ${tickets[i].place}
    
       `)
    
    }
},
Annule:function(){
    let isFound = true;
    let TicketID = parseInt(prompt("Insert le ticket id que tu peux annule : "))
    // IF USER INSERT A BAD INPUT LIKE STRING OR EMPTY SPACE 
    if (!isNaN(TicketID)){
        for ( i in tickets){
            if (TicketID==tickets[i].id){
                console.log(`===========Le billet a été supprimé avec succès=============`)
                trips[tickets[i].tripId-1].availableSeats++
                DeletedIDs[index]=tickets[i]
                chiffre_affaire-=tickets[i].price
                delete tickets[i]
                isFound = true;
                index++;
                TicketNumber--
                break;
            }
            else {
                isFound=false;
            }
        }
        if(!isFound){
            console.log('======== TICKET N PAS EXISTE ========')
        }
    }
    else{
        console.log('Insert valid ticketid ....')
    }
    
},
Recherche:function(){
    console.log("========================================")
    console.log("=  Recharche par Nom :  [0] | Id : [1] =")
    console.log("=                           |          =")
    console.log("========================================")
    let order = parseInt(prompt("Choisir Votre Choice : "))
    let isFound=false;
    if (!isNaN(order)){
        if (order==0){
            let name = prompt("Write the name : ").toUpperCase()
            if (name.length>5 && name.length<15){
            for (i=0;i<tickets.length;i++){
                if (tickets[i].passengerName.toUpperCase()==name){
                    isFound=true;
                    console.log(`___________________________________________________________________________________\n
                                TICKET EXISTE                                      `)
                    console.log(`__________________________________________________________________________________\n\n`)
                    console.log(`
    | TICKET #${tickets[i].id}
    |  Passenger Name : ${tickets[i].passengerName}
    |  Seat Number    : ${tickets[i].seatNumber}
    |  Trip ID        : ${tickets[i].tripId }
    |  Price          : ${tickets[i].price}
    |  Depart         : ${trips[tickets[i].tripId].departure}
    |  Destination    : ${trips[tickets[i].tripId].destination}
    |  Place          : ${tickets[i].place}
    
       `)
        break
                    

                        }
                    }
                if (!isFound){
                    console.log("=================Name Na Pas Exisiste===========")
                }
                    
            
                }
                else{
                    console.log("Insert un valid nom ....")
                }
            }
            else if (order==1){
                let isFound = false;
                let ID=parseInt(prompt('Insert le ticket ID : '))
                if (!isNaN(ID)){
                    for (i in tickets){
                        if(ID==tickets[i].id){
                            isFound=true;
                    console.log(`___________________________________________________________________________________\n
                                TICKET EXISTE                                      `)
                    console.log(`__________________________________________________________________________________\n\n`)
                    console.log(`
    | TICKET #${tickets[i].id}
    |  Passenger Name : ${tickets[i].passengerName}
    |  Seat Number    : ${tickets[i].seatNumber}
    |  Trip ID        : ${tickets[i].tripId }
    |  Price          : ${tickets[i].price}
    |  Depart         : ${trips[tickets[i].tripId].departure}
    |  Destination    : ${trips[tickets[i].tripId].destination}
    |  Place          : ${tickets[i].place}
    
       `)
                            break
                        }
                    }
                    if(!isFound){
                        console.log("========= ID NA PAS EXISTE =========")
                    }                    
                }
                else{
                    console.log('==========insert valid id ...===========')
                }
            }
        }else{
                console.log("=========Insert Valid Data ci teux plus ===========") 
        }

    },
    filter:function(){
        console.log("========================================")
        console.log("=  Filter par Depart :        X  X     =")
        console.log("=                             ____     =")
        console.log("========================================")
        let order = prompt("Donné la ville de depart   :  ").toUpperCase().trim()
        if (order.length < 3 && order.length > 10){
            return console.log("===========INSERT UNE VALID VILLE==============")
        }
        let isFound = false
        for (i in trips){
            if (order === trips[i].departure.toUpperCase()){
                isFound=true;
                console.log(`
|   ${trips[i].departure} ==> ${trips[i].destination}               
|   Price : ${trips[i].price}                               
|___________________________________________________________              
                    `)

            }
        }
        if (!isFound){
            console.log("=============VILLE NE EXISTE PAS===============")
        }

    },
    Trier:function(){
        let tmp =0;
        let prices =[];
        for (let i=0;i<trips.length;i++){
            prices[i]=trips[i].price
        }
        for (let i=0;i<prices.length;i++){
            for(let j=0;j<prices.length-1;j++){
                if (prices[j]>prices[j+1]){
                    tmp = prices[j];
                    prices[j]=prices[j+1]
                    prices[j+1]=tmp
                }
            }

        }
        console.log(prices)
        let temp=0;
        
            for (let i=0;i<trips.length;i++){
               for(let j=0;j<trips.length;j++){
            if (prices[i]==trips[j].price){
                console.log (`| ${trips[j].departure} ==> ${trips[j].destination}
| Price : ${trips[j].price}`)
            }
        }
        }
    
    },
    Static:function(){
        let temps = [];
        let VilleTicket = {}
        function Calc(){
            
            let tmp = 0;
            for (i in trips){
                temps[i]={"TicketsVendu":50-(trips[i].availableSeats),"ville":trips[i].departure}
            }
            for (let i=0;i<temps.length;i++){
                for(let j=0;j<temps.length-1;j++){
                    if (temps[j].TicketsVendu<temps[j+1].TicketsVendu){
                        tmp = temps[j]
                        temps[j]=temps[j+1]
                        temps[j+1]=tmp
                    }
                    
                }
                
            }
            
        }
        Calc()


        console.log('=========================================================')
        console.log('========          STATISTIQUE                ============')
        console.log(`|
| Chiffre D'Affaire : ${chiffre_affaire} DH
| Ticket Vendu      : ${TicketNumber}
| Le Mielluer Ville : ${temps[0].ville} | Tickets ${temps[0].TicketsVendu}
| 
`)
    }
}


        
     














let start =true;
console.log("================================================================================")
console.log("= RAILWAY MANAGER V1                                     by:Amine              =")
console.log("================================================================================")
console.log(`
1. Afficher les trajets                                                        =
2. Acheter un ticket                                                           =
3. Afficher les tickets                                                        =
4. Annuler un ticket                                                           =
5. Rechercher un ticket                                                        =
6. Filtrer les trajets                                                         =
7. Trier les trajets                                                           =
8. Assiste moi                                                                 =
9. Statique                                                                    =
0. Quitter                                                                     =
================================================================================`)
while (start){
let choice = prompt('Vote Choix : ')


switch(choice){
    case "0":
            start = false;
            console.log("Au Revoir ...")
            break;
    case "1":
            Manage.Afficher();
            break;
    case "2":
            Manage.Achetter();
            break;
    case "3":
            Manage.AfficherTicket();
            break;
    case "4":
            Manage.Annule();
            break;
    case "5":
            Manage.Recherche();
            break;
    case "6":
            Manage.filter();
            break;
    case "7":
            Manage.Trier();
            break;
    case "8":
        console.log("=====================================")
        console.log("= RAILWAY MANAGER V1                =")
        console.log("=====================================")
        console.log(`
1. Afficher les trajets 
2. Acheter un ticket 
3. Afficher les tickets 
4. Annuler un ticket 
5. Rechercher un ticket 
6. Filtrer les trajets 
7. Trier les trajets
8. Assiste moi
9. Statique  
0. Quitter`)
    break;
    case "9":
        Manage.Static()
    break;
    default:
        console.log('insert un valid choice ...')
        break;
        }}

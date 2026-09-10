const { trips } = require('./Trajets.js')
const { places } = require('./Trajets.js')
var prompt = require('prompt-sync')();
const tickets = [];
let ticket_id = 0;
let DisponsibleIDs=[];
let chiffre_affaire =0;
let index=0;




// Functions Object : this objects has all functions will app to work
const Manage = {
    Afficher:function(){
        console.log("===============TRAJECTS DISPONSIBLE===============\n\n")
        for(let i=0; i<trips.length;i++){
            if (trips[i].availableSeats>0){
        console.log('=======================================================================')
        console.log(`|  #${trips[i].id} | departure : ${trips[i].departure} | destination : ${trips[i].destination}`)
        console.log(`| departureTime: ${trips[i].departureTime} | arrivalTime : ${trips[i].arrivalTime} | price : ${trips[i].price}`)
        console.log(`| avialableSeats : ${trips[i].availableSeats} `)
        console.log('=======================================================================\n\n')
      }
    }
},Achetter:function(){
        let name = prompt("entré ton nom : ")
        // NAME INPUT VALIDATION
        if (name.length>8 || name.length<=3){
           return console.log('insert valid nom ')
            
        }
        let seat = 1;
        let trip = parseInt(prompt("donne lid de trip : "))
        // IF TRIP INPUT IS NOT NUMBER WITH NUMBER FUNCTION WE SURE THAT IF USER NOT ENTRED NUMBER THE VAR WILL EQUALE "NaN"
        if (!isNaN(trip)){
            for (i in trips){
            if (trip==trips[i].id){
                console.log(1)
                if(trips[i].availableSeats>0){
                    if(DisponsibleIDs.length>0){

                        tickets[DisponsibleIDs[0]-1]={"id":DisponsibleIDs[0],
                                    "passengerName":name,
                                    "tripId":trip,
                                    "seatNumber":1,
                                    "price":trips[i].price,
                                    "place":DisponsibleIDs[0]
                                };
                        trips[i].availableSeats--
                                console.log("===================TICKET SERSI VALIDIE=================")
                            console.log(
                    `
                    | TICKET #${tickets[DisponsibleIDs[0]-1].id}                                 
                    | Passenger Name : ${tickets[DisponsibleIDs[0]-1].passengerName}                  
                    | Seat Number    : ${tickets[DisponsibleIDs[0]-1].seatNumber}       
                    | Price          : ${tickets[DisponsibleIDs[0]-1].price}      
                    | tripID         : ${tickets[DisponsibleIDs[0]-1].tripId}            
                    | Depart         : ${trips[i].departure}
                    | Destination    : ${trips[i].destination}
                    | Place          : ${tickets[DisponsibleIDs[0]-1].place}
        
                     ______________________________________________________________`)
                    delete DisponsibleIDs[0]
                    index-- // ${trips[tickets[DisponsibleIDs[0]].tripId].destination}

                }
                else
                {                                     //trip means the id user insert in case the id is existe it will take the value of trip
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

                 ticket_id++
                break
                }
            }
                else{

                }
          
            }
           
        }
        
        }else{
            return console.log('insert valid id ...')
        }
        
        
},
AfficherTicket:function(){
    console.log(DisponsibleIDs)
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
                delete tickets[i];
                DisponsibleIDs[index]=TicketID
                isFound = true;
                index++;
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
            if (name.length>3 && name.length<8){
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
    
    }
}
const Statistique = {
    

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
0. Quitter                                                                     =
================================================================================`)
while (start){
let choice = prompt('Vote Choix : ')
console.log(ticket_id)
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
0. Quitter`)
    break;
    default:
        console.log('insert un valid choice ...')
        break;
        }}





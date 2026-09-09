const { trips } = require('./Trajets.js')
const { places } = require('./Trajets.js')
var prompt = require('prompt-sync')();
const tickets = [];
let ticket_id = 0;
let DisponsibleIDs=[];
let chiffre_affaire =0;
let index =0;




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
            for (i of trips){
            if (trip==i.id){
                if(i.availableSeats>0){
                    if(DisponsibleIDs.length>0){
                        places[trip].place++
                        tickets[DisponsibleIDs[0]]={"id":DisponsibleIDs[0],
                                    "passengerName":name,
                                    "tripId":trip,
                                    "seatNumber":1,
                                    "price":i.price,
                                    "place":places[trip].place
                                }
                                console.log("===================TICKET SERSI VALIDIE=================")
                            console.log(
                    `
                    | TICKET #${DisponsibleIDs[0]}                                 
                    | Passenger Name : ${tickets[DisponsibleIDs[0]].passengerName}                  
                    | Seat Number    : ${tickets[DisponsibleIDs[0]].seatNumber}       
                    | Price          : ${tickets[DisponsibleIDs[0]].price}      
                    | tripID         : ${tickets[DisponsibleIDs[0]].tripId}            
                    | Depart         : ${trips[tickets[DisponsibleIDs[0]].tripId].departure}
                    | Destination    : ${trips[tickets[DisponsibleIDs[0]].tripId].destination}
                    | Place          : ${tickets[DisponsibleIDs[0]].place}
        
                     ______________________________________________________________`)
                    delete DisponsibleIDs[0]
                    index-- // ${trips[tickets[DisponsibleIDs[0]].tripId].destination}

                }
                else
                {                                     //trip means the id user insert in case the id is existe it will take the value of trip
                      places[trip].place++
                      tickets[ticket_id]={"id":ticket_id,
                                "passengerName":name,
                                "tripId":trip,
                                "seatNumber":1,
                                "price":i.price,
                                "place":places[trip].place
                               }
                        console.log("===================TICKET SERSI VALIDIE=================")
                            console.log(
                    `
                    | TICKET #${ticket_id}                                 
                    | Passenger Name : ${tickets[ticket_id].passengerName}                  
                    | Seat Number    : ${tickets[ticket_id].seatNumber}       
                    | Price          : ${tickets[ticket_id].price}      
                    | tripID         : ${tickets[ticket_id].tripId}            
                    | Depart         : ${trips[tickets[ticket_id].tripId].departure}
                    | DepartureTime  : ${trips[tickets[ticket_id].tripId].destination}
                    |  Place         : ${tickets[ticket_id].place}

                     ______________________________________________________________`)


                }
            }
                else{

                }
          
            }
           
        }
        
 ticket_id++
        }else{
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
    |  Depart         : ${tickets[i].departure}
    |  Destination    : ${tickets[i].destination}
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
                places[tickets[i].tripId].place--
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
    
}
}



















let start =true;
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
0. Quitter`)
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


    case "6":

    case "7":

    default:
        console.log('insert un valid choice ...')
        break;
}
}






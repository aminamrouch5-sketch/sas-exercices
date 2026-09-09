
function Recherche(){
    console.log("========================================")
    console.log("=  Recharche par Nom :  [0] | Id : [1] =")
    console.log("=                           |          =")
    console.log("========================================")
    let order = parseInt(prompt("Choisir Votre Choice : "))
    let isFound=false;
    if (!isNaN(order)){
        if (order==0){
            let name = prompt("Write the name : ").toUpperCase()
            if (name.length<3 && name.length>8){
            for (i=0;i<tickets.length;i++){
                if (tickets[i].name==name){
                    isFound=true;
                    console.log(`___________________________________________________________________________________\n
                                                                TICKET EXISTE                                      `)
                    console.log(`__________________________________________________________________________________\n\n\n\n`)
                    console.log(`console.log
    | TICKET #${tickets[i].id}
    |  Passenger Name : ${tickets[i].passengerName}
    |  Seat Number    : ${tickets[i].seatNumber}
    |  Trip ID        : ${tickets[i].tripId }
    |  Price          : ${tickets[i].price}
    |  Depart         : ${tickets[i].departure}
    |  Destination    : ${tickets[i].destination}
    |  Place          : ${tickets[i].place}
    
       `)
        break
                    

                }
            }
            if (!isFound){
                console.log("========================= TICKET NA PAS EXISTE ================================")

            }
        }
    }
    }else{
        console.log("S'il te plait insert un valid nom ")
    }

}

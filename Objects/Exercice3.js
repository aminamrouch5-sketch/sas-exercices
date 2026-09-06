var prompt = require('prompt-sync')();
let rectangle = {}
const largeur = Number(prompt('donne moi la largeur de rectangle : '))
const longeur = Number(prompt('donne moi la longeur de rectangle : '))
rectangle = {
             "largeur":largeur,
             "longeur":longeur
}


function Surface(x,y){
    let Surface = x*y;
    console.log(Surface)

}

Surface(rectangle.largeur,rectangle.longeur)


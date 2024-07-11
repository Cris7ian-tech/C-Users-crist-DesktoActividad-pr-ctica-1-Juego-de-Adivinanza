//Adivinanza parte 1: generacion n° secreto (numeroAleatorio).

let inicio = 1;
let fin = 100;


// let numeroAleatorio = inicio + Math.floor(Math.random() * fin);
    
// console.log(numeroAleatorio);

function numeroAleatorio(){
    return inicio + Math.floor(Math.random() * fin);
}
// console.log(numeroAleatorio);



function juegoAdivinanza(){
    let numeroSecreto = numeroAleatorio();
    let conjetura = null;
    let intentos = 0;

    alert("Bienvenida/o a Adivina el Numero")



    while (conjetura !== numeroSecreto){
        conjetura = parseInt(prompt("Ingresa tu conjetura: "));
        intentos +=  1;

        if (conjetura < numeroSecreto){
            console.log("nono, tu conjetura es demasiado baja. Intenta de nuevo.");
        } else if (conjetura > numeroSecreto){
            console.log("Mmm, alto, tu conjetura es alta. Intenta de nuevo.");

        } else if (conjetura === numeroSecreto){
            console.log(`¡felicidades! Lo Lograste!! ADIVINASTE el numero secreto (${numeroSecreto}) en (${intentos}) intentos.`)
        } else{
            console.log("Ingresa un numero valido.");
        }    
    }

}

// juegoAdivinanza()

//insert coin!


// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false

let rojo = false
let colorojo = "rojo"
let amarillo = false
let coloramarillo = "amarillo"
let verde = true
let colorverde = "verde"
let salkdasd = false

const semaforo = prompt("Cual color del semaforo es con el que puedes dar marcha adelante?")

if(colorverde == semaforo){
    alert("Correcto")
    console.log(verde)

}else if (colorojo == semaforo || coloramarillo == semaforo){
    alert("menso")
    console.log(false)
    console.log("Error: color de semáforo inválido.")

}else{
    alert("por favor de escribir un color")
    console.log(salkdasd)
    console.log("Error: color de semáforo inválido.")
}



// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false

let primeravocal = "a"
let segundavocal = "e"
let terceravocal = "i"
let cuartavocal = "o"
let quintavocal = "u"

const vocal = prompt ("Nombra alguna vocal")

if (vocal == primeravocal || vocal == segundavocal || vocal == terceravocal || vocal == cuartavocal || vocal == quintavocal){
    console.log(vocal + ", es una vocal")

}   else if (vocal == null){
        alert("escribe algo")
        console.log(null)

}else {
    alert("Error, Las vocales son a, e, i, o, u.")
    console.log(vocal + " No es una vocal")
}

// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es

// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

let a = false
let n = true
let digito = false
let afirmar = "si"
let afirmarS = "Si"

const consonante = prompt("Sabes lo que es una consonante?")
if (consonante == afirmar || consonante == afirmarS){

const diConsonante = prompt("Cual de las siguientes es una consonante? (a) (n) (13)")
if (diConsonante == "n"){
    console.log(n)
    }else if (diConsonante == "a"){
        alert("No es a")
        console.log(a)
    }else if (diConsonante == "13"){
        alert("No es 13")
        console.log(digito)
    }else if (diConsonante == null)
        console.log("no puso nada")

}else{
    alert("Las consonantes son sonidos de las lenguas que se produce con un cierrar en el canal de voz")
}

//LISTO 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests,             no tiene multas impagas y pagó todos los impuestos.

// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false

let positivo = "si"
let positivoS = "Si"
let negativo = "no"
let negativoS = "No"

let test = prompt("Pasaste el examen?")

if (test == positivo || test == positivoS){

    let multas = prompt("Tienes multas sin pagar?")

    if (multas == negativo || multas == negativoS){

        let impuestos = prompt("Haz pagado todos tus impuestos?")

        if (impuestos == positivo || impuestos == positivoS){
            alert("Felicidades tienes todos los requisitos para poder renovar tu carnet")
            console.log(true)

        }else{
            alert("No puedes renovara")
            console.log(false)
        }

    }else{
        alert("No puedes renovara")
        console.log(false)
    }

}else{
    alert("No puedes renovar")
    console.log(false)
}


// 5)LISTO Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

let cero = 0;

let number = prompt("Deja un numero que pueda ser par");

if((number % 2) == cero){
    console.log(number + " es par");

}   else if (number == null){
        console.log(null)

}else{
    console.log(number + " es impar");
}


//LISTO 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

let numero = prompt("Deja un numero que tu desees (puede ser negativo o positivo)")
if(numero <= -1){
    console.log("Es negativo")
}else if (numero >= 1){
    console.log("Es positivo")
}else if (numero == 0 || numero == null){
    alert("Escribe un digito de valor")
    console.log(null)
}else{
    alert("Dije numero, menso")
    console.log(numero + ", no es un numero")
}
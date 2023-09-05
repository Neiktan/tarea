// 1) Muestre un mensaje en consola que diga lo siguiente: "¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!"
console.log("¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!")


// 2) Hacer una variable que almacene un número par mayor a 10.
let parNumber = 12;
console.log(parNumber)


// 3) Hacer una variable que almacene  un numero impar menor a 100.
let imparNumber = 53;
console.log(imparNumber)


// 4) Visualizar en consola la suma de las dos variables numéricas que hicimos.
console.log(12 + 53)  //o tambien algo como (parnumer + imparnumber)


// 5) Con un cuadro de diálogo, pregúntele el nombre al usuario que ingresa a la web y guarde su valor en una variable.
let usuario = prompt("Ingrese su nombre de usuario")
console.log(usuario)


// 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: "Bienvenide a nuestra primera web -usuario-"
console.log("Bienvenide a nuestra primera web" + " " + usuario)


// 7) Genere una nueva variable que almacene el número 5 y que se multiplique con el número impar.
let resultNumber = 5 * imparNumber;
console.log(resultNumber)


// 8) A través de un prompt, pregunte al usuario si es mayor de edad. Guarde este valor en una variable.
let mayorDeEdad = prompt("Eres mayor de edad?")
console.log(mayorDeEdad)


// 9) Reste 100 a la variable que multiplica por 5 al número impar.
console.log(resultNumber - 100)


// 10) Cotejar el tipo de dato del punto 3 y 5.
console.log(typeof imparNumber)
console.log(typeof usuario)


// DESAFÍO PRIMER) hacer un programa que pida la edad del usuario y que devuelva en una alerta, el año en que nació
let anioActual = 2023
let mayorDeEdadNumber = prompt("Que edad tienes?")
console.log(mayorDeEdadNumber)

let anioNacimiento = anioActual - mayorDeEdadNumber
alert("Naciste en el anio:" + " " + anioNacimiento)
console.log(anioNacimiento)
/* let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));

alert("Hola " + nombre + " de " + edad + " años, ¿Te interesaría adquirir tickects?") */


let nombre = prompt("Cuál es tu nombre?").toUpperCase();

while (nombre.length < 3) {
    nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?").toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = "Hola, " + nombre +"!";




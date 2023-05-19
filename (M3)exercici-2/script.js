let num1 = parseInt(prompt("Escriu una xifra!", 0));
let num2 = parseInt(prompt("Escriu una altre!", 0));

let sumar = num1 + num2;
document.getElementById("valorSumar").innerHTML = "El resultat de la suma és: " + sumar;

let restar = num1 - num2;
document.getElementById("valorRestar").innerHTML = "El resultat de la resta és: " + restar;

let multiplicar = num1 * num2;
document.getElementById("valorMultiplicar").innerHTML = "El resultat de la multiplicació és: " + multiplicar;

let dividir = num1 / num2;
document.getElementById("valorDividir").innerHTML = "El resultat de la divisió és: " + dividir;


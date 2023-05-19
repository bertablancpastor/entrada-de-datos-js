let name = prompt("Com et dius?");
let surname = prompt("Quin és el teu cognom?");
let age = prompt("Quants anys tens?");

let message = "L'alumne es diu " + name + 
" " + surname + ", i té " + age + " anys.";

document.getElementById("show").innerHTML = message;

console.log(message);
alert(message);




//OPCIÓ 1
let nota1 = parseInt(prompt("Posa la primera nota"));
let nota2 = parseInt(prompt("Posa la segona nota"));
let nota3 = parseInt(prompt("Posa la tercera nota"));

let mitjana = (nota1 + nota2 + nota3) / 3;

document.getElementById("mitjanaNotes").innerHTML = "La mitjana de les 3 notes és " + mitjana;

//OPCIÓ CORRECIÓ AMB CONST

const TOTALNOTES = 3 
let nota01 = parseInt(prompt("Posa la primera nota"));
let nota02 = parseInt(prompt("Posa la segona nota"));
let nota03 = parseInt(prompt("Posa la tercera nota"));


document.getElementById("mitjanaNotes2").innerHTML = "La mitjana de les "+ TOTALNOTES + " notes és " + (nota01 + nota02 + nota03) / TOTALNOTES;

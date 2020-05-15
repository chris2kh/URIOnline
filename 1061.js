
let dia1 = 5;
let hora1 =8;
let minutos1 =12; 
let segundos1 =23;

let dia2 = 6;
let hora2 =9;
let minutos2 =12; 
let segundos2 =26;

let dias;
let horas;
let minutos;
let segundos;


dias = dia2 - dia1;
horas = hora2 - hora1;
minutos = minutos2 - minutos1;
segundos = segundos2 - segundos1;


if (horas < 0){
    horas += 24;
    dias --;
}

if (minutos < 0){
    minutos += 60;
    horas --;
}

if (segundos < 0){
    segundos += 60;
    minutos --;
}

console.log(dias + " dia(s)");
console.log(horas + " hora(s)");
console.log(minutos + " minuto(s)");
console.log(segundos + " segundo(s)");
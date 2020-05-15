let numbers = lines.shift().split(" ");

let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);

const mayor = (x, y) => x > y ? x : y;
const menor = (x, y) => x > y ? y : x;
const multiplos = (x, y) => mayor(x, y) % menor(x, y) == 0

if (multiplos(a,b)){
    console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}
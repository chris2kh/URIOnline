


let x = 6;
let y = -5;

if (x > y) {
    [x,y] = [y,x]
}

if (x % 2 == 0) {
    x++;
}
else {
    x += 2;
}

let i;
let suma = 0;


for(i = x; i < y; i += 2) {
    suma += i;
}

console.log(suma);

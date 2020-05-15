
let nums = [-5,
0,
-3,
-4,
12];

let pares = 0;
let impares = 0;
let negativos = 0;
let positivos = 0;

for(i = 0; i < 5;i++) {
    let num = nums[i];
    if (num % 2 == 0) {
        pares ++;
    }
    else {
        impares ++;
    }
    if (num > 0) {
        positivos ++;
    }
    else if (num < 0) {
        negativos ++;
    }
}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");
let nums = [7,
-5,
6,
-3.4,
4.6,
12];

let numPositivos = 0;
let sumaPositivos = 0;
for(i = 0; i < 6;i++){
    let num = nums[i];
    if (num > 0) {
        numPositivos++;
        sumaPositivos += num;
    }
    
}
let promedioPositivos = sumaPositivos / numPositivos;

console.log(numPositivos + " valores positivos");
console.log(promedioPositivos.toFixed(1))
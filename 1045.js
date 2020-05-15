let numbers = ["6.0","6.0" ,"6.0"];
numbers = numbers.map(number => parseFloat(number));
numbers.sort((a,b) => b-a);

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

  
const tipoTriangulo = (a, b, c) =>{
    let mensaje = "";
    
    if (a >= b + c){
        return "NAO FORMA TRIANGULO";
    }
    
    if (a*a == b*b + c*c){
        return "TRIANGULO RETANGULO";
    }
    
    if (a*a > b*b + c*c){
        mensaje += "TRIANGULO OBTUSANGULO";
    }
    
    if (a*a < b*b + c*c){
        mensaje += "TRIANGULO ACUTANGULO";
    }
    
    if (a == b && b == c){
        mensaje += "\nTRIANGULO EQUILATERO";
    }
    else if (a == b || b == c){
        mensaje += "\nTRIANGULO ISOSCELES";
    }
    
    return mensaje;
}

console.log(tipoTriangulo(a,b,c));
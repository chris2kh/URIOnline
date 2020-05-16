let numbers = "2 3 2 6";

// get numbers
let a = parseInt(numbers.split(" ")[0]);
let b = parseInt(numbers.split(" ")[1]);
let c = parseInt(numbers.split(" ")[2]);
let d = parseInt(numbers.split(" ")[3]);

// determine if this number set is accepted
function aceitos(a, b, c, d){
    
    return (
        // 1st condition 
           b > c
        // 2nd condition
        && d > a
        // 3rd condition
        && (c + d) > ( a + b)
        // 4th condition
        && c > 0 && d > 0
        // 5th condition
        && a % 2 == 0
    );
}


let conditionalText = aceitos(a,b,c,d) ? "" : "nao ";

console.log("Valores " + conditionalText + "aceitos");

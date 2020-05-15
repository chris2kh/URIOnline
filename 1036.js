let numbers = lines.shift(); 
//let numbers = "10.0 20.1 5.1";

let a = parseFloat(numbers.split(" ")[0]);
let b = parseFloat(numbers.split(" ")[1]);
let c = parseFloat(numbers.split(" ")[2]);



// get roots through Bhaskara´s formula
function quadraticRoots(a, b, c){
    
    let divisionByZero = a == 0;
    let insideRoot = Math.pow(b, 2)  - 4 * a * c;
    
    // check if solution is possible
    if (divisionByZero || insideRoot < 0){
        return "not possible to calculate";
    }
    
    // get root1
    let root1 = ( -b + Math.sqrt(insideRoot) ) / (2 * a);
    
    // get root2
    let root2 = ( -b - Math.sqrt(insideRoot) ) / (2 * a);
    
    return [root1, root2];
}


let result = quadraticRoots(a,b,c);

if(result == "not possible to calculate"){
    console.log("Impossivel calcular");
    
}
else{
    // show results in format as requested
    console.log("R1 = " + result[0].toFixed(5));
    console.log("R2 = " + result[1].toFixed(5));
}
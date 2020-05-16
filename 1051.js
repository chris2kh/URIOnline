


let salary = "3002.25";


const readjustment = (salary) =>{
    let pay = 0;

    if (salary <= 2000){
        return 0;
    }
    if (salary > 2000 ){
        pay += Math.min(1000, salary - 2000) * 0.08; 
        
    }
    if (salary > 3000 ){
        pay += Math.min(1500, (salary - 3000)) * 0.18;
    }
    if (salary > 4500 ){
        pay += (salary - 4500) * 0.28;
    }
    
    return pay;
};

let result = readjustment(parseFloat(salary));

if (result == 0) {
    console.log("Isento");
}
else {
    console.log("R$ " + result.toFixed(2));
}

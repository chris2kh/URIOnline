let salary = 2000.00;


const readjustment = (salary) =>{
    let readjustment;
    
    if (salary <= 400){
        readjustment = 0.15;
    }
    else if (salary > 400 && salary <= 800){
        readjustment = 0.12;
    }
    else if (salary > 800 && salary <= 1200){
        readjustment = 0.10;
    }
    else if (salary > 1200 && salary <= 2000){
        readjustment = 0.07;
    }
    else if (salary > 2000){
        readjustment = 0.04;
    }
    
    return readjustment;
};

let increment = salary * readjustment(salary);
let newSalary = salary + increment;

console.log("Novo salario: " + newSalary.toFixed(2) );
console.log("Reajuste ganho: " + increment.toFixed(2) );
console.log("Em percentual: " + Math.floor((readjustment(salary) * 100)) + " %");

const timeConversion = [
        { 
            name : "ano(s)",
            timeInDays : 360
        },
        { 
            name : "mes(es)",
            timeInDays : 30
        },
        { 
            name : "dia(s)",
            timeInDays : 1
        },
    ]

// get age in days
let age = 800;

let result = "";

timeConversion.forEach(conversionUnit =>{
    
    // get quotient
    let quotient = Math.floor(age / conversionUnit.timeInDays);
    
    // append this iteration quotient to result
    result += quotient + " " +conversionUnit.name + "\n";
    
    // new age equals the remainder
    age %= conversionUnit.timeInDays;
})

// remove final \n from the result
result = result.substring(0, result.length - 1);

console.log(result);

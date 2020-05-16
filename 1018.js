const BANK_NOTES = [100, 50, 20, 10, 5, 2, 1];

// get value
let value = 942;

// set first line of the result as requested 
let result = value + "\n";

// for every bank note do:
for(let i = 0; i < BANK_NOTES.length; i++){
    
    // get quotient
    let quotient = Math.floor(value / BANK_NOTES[i]);
    
    // append this iteration text to result
    result += quotient + " nota(s) de R$ " + BANK_NOTES[i] + ",00\n";
    
    // new value for next iteration is the remainder part
    value = value % BANK_NOTES[i];
}

console.log(result);

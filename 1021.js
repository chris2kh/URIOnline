const NOTAS = {
    title : "NOTAS",
    name : "nota(s)",
    values : [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
}

const MOEDAS = {
    title : "MOEDAS",
    name : "moeda(s)",
    values : [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
}

function decompose(amount, MONEY_OBJECT){
    
    // set first line to title as requested
    let text = MONEY_OBJECT.title + ":\n";

    MONEY_OBJECT.values.forEach(value =>{
        
        // get this iteration quotient
        let quotient =  Math.floor( amount / value);
        
        // append this iteration quotient to text
        text += quotient + " " + MONEY_OBJECT.name + " de R$ " + value.toFixed(2) + "\n";
        
        // new amount equals the remainder
        amount %= value;
        amount = parseFloat(amount.toFixed(2));
        
    })
    
    // remove break line of last item because we dont need it
    text = text.substring(0, text.length -1);
    
    // return remaining amount that couldnt be decomposed by MONEY_OBJECT, and text
    return [amount, text];
}


// get money
let money = 101.16;


// get bills decomposition first
let billsResult = decompose(money, NOTAS);


//get remaining money that couldnt be decomposed by bills
money = billsResult[0];

// get coins decomposition for remaining money
let coinsResult = decompose(money, MOEDAS);

// join result texts as requested
let decompositionText = billsResult[1] + "\n" + coinsResult[1] + "\n";

// show the final result
console.log(decompositionText);

let scores  = ["2.0", "4.0" ,"7.5","8.0"];
let weights = [2,3,4,1];


// weight average =  Σ  scores[i] * weights[i]     <------ lets call this item0
//                  -------------------------
//                          Σ  weights[i]          <------ lets call this item1


// callback function to calculate weight average items
const calculateItems = (items, currentWeight, currentIndex) =>{
    
    // accumulate Σ  scores[i] * weights[i] (item0)  
    items[0] += parseFloat(scores[currentIndex]) * currentWeight;

    // accumulate Σ  weights[i] (item1)
    items[1] += currentWeight;
    
    return items;
}

// loop through weight array and invoke calculateItems function on every position 
let items = weights.reduce( calculateItems, [0,0]);

// we can calculate weight average
let weightAverage = items[0] / items[1];


// format message as requested
let message = "Media: " + weightAverage.toFixed(1) +"\n";

// examine weight average conditions
if (weightAverage >= 7){
    message += "Aluno aprovado.";
}
else if (weightAverage < 5){
    message += "Aluno reprovado.";
}
else {
    // student is taking an exam right now, so....
    message += "Aluno em exame.\n";
    
    // read from lines the second score
    //let secondScore = parseFloat(lines.shift());
    let secondScore = 2.2;
    message += "Nota do exame: " + secondScore.toFixed(1) + "\n";

    // new weightAverage is...
    weightAverage = ( weightAverage + secondScore ) / 2;
    
    // examine new weight average conditions
    if (weightAverage >= 5){
        message += "Aluno aprovado.\n";
    }
    else if (weightAverage <= 4.9){
        message += "Aluno reprovado.\n";
    }
    
    // format message as requested
    message += "Media final: " + weightAverage.toFixed(1);
}

console.log(message)

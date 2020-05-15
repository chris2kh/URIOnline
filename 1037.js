let number = 14.5;

                  
function getInterval(number){
    const upperLimits = [25,50,75,100];

    const intervals = [
                  "Intervalo [0,25]",
                  "Intervalo (25,50]",
                  "Intervalo (50,75]",
                  "Intervalo (75,100]"];
    
    // edge cases
    if (number < 0 || number > 100){
        return "Fora de intervalo";
    }
    
    
    // loop trough upperLimits
    for(i in upperLimits){
        
        // number fits in the interval
        if(number <= upperLimits[i]){
            return intervals[i];
        }
    }
}

// show result
console.log(getInterval(number));
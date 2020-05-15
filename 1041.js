//let coordinates = lines.shift();
//let x = parseFloat(coordinates[0]);
//let y = parseFloat(coordinates[1]);

let x = -5.1;
let y = 7.0;
let message = "";

let condition = x * y;

switch (true) {
    
    
    
    case (condition == 0):
        if(x == 0 && y == 0){
            message = "Origem";
        }
        else if (x == 0){
            message = "Eixo Y";
        }
        else{
            message = "Eixo X";
        }
        break;
    
    
    
    case (condition > 0):
        if (x > 0){
            message = "Q1";
        }
        else{
            message = "Q3";
        }
        break;
    
        
    case (condition < 0):
        if (x > 0){
            message ="Q4";
        }
        else{
            message = "Q2";
        }
        break;
}

console.log(message + "\n");
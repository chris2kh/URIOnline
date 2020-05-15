//lines = lines.shift().split(" ");
lines = "2 3"
lines = lines.split(" ");
let code = parseFloat(lines[0]);
let amount = parseFloat(lines[1]);

let snacks = {
    1 : 4.00,
    2 : 4.50,
    3 : 5.00,
    4 : 2.00,
    5 : 1.50
}



console.log("Total : R$ " + (snacks[code] * amount).toFixed(2));

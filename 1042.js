
let original = ["4","3","5","-1","45","17"];
let numbers = JSON.parse(JSON.stringify(original));

// bubble sort
let length = original.length;
for(i = 0; i < length - 1;i++){
    for(j = 0; j < length - 1 -i; j++){
        if (parseInt(numbers[j]) > parseInt(numbers[j + 1])){
            [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        }
    }
}

for(number of numbers){
    console.log(number);
}
console.log("");
for(number of original){
    console.log(number);
}

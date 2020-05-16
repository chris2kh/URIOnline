let numbers = ["9.0","2.1","6.0"];
let a = parseFloat(numbers[0]);
let b = parseFloat(numbers[1]);
let c = parseFloat(numbers[2]);

// triangle is possible if triangle inequality theorem holds.
// triangle inequality theorem states that the sum of 
// the side lengths of any 2 sides of a triangle must 
// exceed the length of the third side

if ( a + b > c 
&&   a + c > b
&&   b + c > a){
    console.log("Perimetro = " + (a + b +c).toFixed(1));
}
else{
    console.log("Area = " + ((a + b)*c/2).toFixed(1));
}

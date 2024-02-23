// primitive type are passed by value.

let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);

// object and array are passed by reference
let student1 = {name: 'jalil', partner: 'jamila'};
let student2 = {name: 'raj', partner: 'rajiya'};

function makeMovie(couple1, couple2){
    couple1.name = 'Onnonto';  // change the name
    couple2.partner = 'mim';  // change the partner


}

makeMovie(student1, student2);
console.log(student1, student2);
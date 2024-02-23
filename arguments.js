// argument is array like object.

function sum(a, b, c){
    //console.log(typeof arguments);
    const args = [...arguments]; // create an array
    //console.log(args);
    const result = a + b + c;
    return result;

}
//console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
//console.log(total);
console.log(sum.length); // how many parameter you set in this function.
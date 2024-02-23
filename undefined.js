/*
8 ways to get Undefined
1. variable that is not initialized will give undefined.
2. function with no return.
3. parameter that is no passed will be undefined.
4. if return nothing on the right side will return undefined.
5. property doesn't exist on an object will give you undefined.
6. accessing array elements outside of the index range.
7. deleting an element inside an array
8. set a value directly to undefined.
*/

let first ;
function second(a, b){
    const total = a + b;
}

function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(2, 4);
// const result = second();
// console.log(result);

function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;

}

const total = noNegative(2, -5);
// console.log(total);

const fifth = {id: 2, name: 'ponchom', age: 40};
//console.log(fifth.age, fifth.salary);


const sixth = [4, 89, 87, 56, 54];
// you should not do it. instead use splice.
delete sixth[1];
//console.log(sixth[1], sixth[5], sixth[200]);


const eight = undefined;
const ninth = null;

const data = {results: [], updated: null};
//console.log(typeof undefined);
console.log(typeof null);
/*
Truthy:
1. true
2. any number (+ve or -ve) will true.
3. any string other than empty string
4.'0' and 'false' in a string it will true.
5.{} 
6.[]


falsy:
1. false
2. 0
3. '' (empty string)
4. undefined is falsy value
5. null


*/




let x = null;
if(x){
    console.log('value of x is Truthy');
}

else{
    console.log('value of x is falsy');
}

// chack falsy
const y = null;
if(!y){
    console.log('value is falsy');
}

// check truthy

const z = '';
if(!!x){
    console.log('shohag is truthy');
}
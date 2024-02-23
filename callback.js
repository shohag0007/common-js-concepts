function greeting(greetingHandler, name){
    greetingHandler(name);
}
//const number = [45, 54, 78];
//const laptop = {price: 45000, brand: 'Lenovo', memory: '8gb'}


function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);

}


greeting(greetingHandler, 'tom thanks');
greeting(greetingHandler, 'tom brady');
greeting(greetingHandler, 'tom cruise');
greeting(greetEvening,'Shohag');
greeting(greetNight, 'Alif');
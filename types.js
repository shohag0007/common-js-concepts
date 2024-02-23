// dynamic type language
const a = 5;
const b = 'hello everyone';
const d = true;

// non-primitive
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

//console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = {job: 'front end developer'};
console.log(p, q);
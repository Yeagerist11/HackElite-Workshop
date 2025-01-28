var a = 10;
let b =20;
const c = 30;

if(true){
    var a =40;
    let b = 50;

}
console.log(a);
console.log(b);



let name = "Alice"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let score = null; // Null
let city; // Undefined
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof score); // Output: object (quirk of JS)
console.log(typeof city); // Output: undefined

if (age>= 18){
    console.log('You are an adult')

} else{
    console.log('you are a minor')

}
function add(a,b){
    return a+b;
}
let sum=add(20,30);
console.log(sum);

let text='the rain in spain';
let pattern=/rain/;
if(pattern.test(text)){
    console.log("Match found")
} else{
    console.log("Match not found")
}


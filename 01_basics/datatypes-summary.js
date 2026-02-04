//  primitive datatype

// 7 types : string , Number, Boolean, Null, undefined,symbol,bigInt


//Array, Objects, function

 const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =122345678897544322;
console.log('bigNumber');


// const heros = ["shaktiman","naagraj" "doga" ];
// let myObj ={
//     name: "hitesh",
//     age: 22,
// }

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap (non primitive)

let myYoutubename ="anishbabucom";

let anothername = "myYoutubename"
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);


let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "anish@aci.com"

console.log(userOne.email)
console.log(userTwo.email)
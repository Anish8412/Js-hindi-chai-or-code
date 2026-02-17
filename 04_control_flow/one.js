//if  statement read

// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 41){
//     console.log("less than 50");

// }else{
//     console.log("temparature is graeter than 70")

// }

// console.log("execute")

// <(less than) , >(Greater than), <=(less than equal to 2<=2), >=(grater than equal), ==(equal check), !=(not Equal to ( 3 ! = 2 negative check) ===(value or type check) !==()

// const score =200
// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`)   scope count hota hai

//  const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2")// wrong way write coding

// if (balance < 500){
//     console.log("less tha 500");

// }else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")

// }else if (balance < 1900){
//     console.log("less than 1900")
// }


const userloggedIn = true
const debitcard = true
const isLoggedInFromGoogle = false
const loggedInFromEmail = true


if (userloggedIn && debitcard ){
    console.log("allow to buy course")
}

if(isLoggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}




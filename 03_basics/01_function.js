function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I")
    console.log("s")
    console.log("h")

}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2);
// }

// function addTwoNumbers(number1, number2){
//     console.log("Anish");
//    return number1 + number2;
// }//

// const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function loginUserMessage( username){
    if(username === undefined){
       return
    }
    console.log("please enter a username")
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anish"))
console.log(loginUserMessage())
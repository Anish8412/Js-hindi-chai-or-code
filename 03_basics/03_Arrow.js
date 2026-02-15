const user = {
    username : "Anish",
    price : 999,

    welcomeMessage: function (){
        console.log( `${this.username}, welcome to website`);
        console.log(this);
    }
}


// user. welcomeMessage ()
// user. username = "sam"///context value change kar diya 
// user.welcomeMessage()

// console.log(this);


////browser ke andar jo object hai ooo window object hai////node me jo hia amty object hai



// function chai (){
//     let username = "anish"
//     console.log(this.username);//// this function isn't use in function
// }

// chai()



// const chai = function (){
//     let username = "Anish"
//     console.log(this.username);
// }
const chai = ()=>{
    let username = "Anish"
    console.log(this);
}

chai()

/////Arrow function 

// const addTwo = (num1, num2) => {
// return num1 + num2
// }
// const addTwo = (num1, num2) => ( num1 + num2)
const addTwo = (num1, num2) => ({username: "Anish"})


console.log(addTwo(3,4))
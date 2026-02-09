// // const tinderuser = new Object()   // single tern object hai
// const tindrUser ={}// non singleton object hai
// // console.log(tindrUser);


// // tinderUser.id ="123abn"
// // tinderUser.name = "Anish"
// // tinderUser. isloggedIn = false;

// // // console.log(tinderUser)

// // const regularUser = {
// //     email: "anish@gmail.com",
// //     fullname: {
// //         userfullname:{
// //             firstname: "anish",
// //             lastname: "kumar"
// //         }
// //     }


// // }

// // console.log(regularUser.fullname.userfullname.firstname)

// // const obj1 = {1: "a", 2: "b"}
// // const obj2 = {3: "a", 4: "b"}
// // const obj4 = {5: "a",6: "b"}
// // // const obj3 = Object.assign({},  obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}

// // console.log(obj3);

// const users = [

// {
//   id : 1,
//   email: "amishj@gmail.com",
// },
// {
//   id : 1,
//   email: "amishj@gmail.com",
// },
// ]

// users[1]. email

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('islogged'));


// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
  coursename: "mern stack",
  price: "999",
courseInstructor: "hitesh choudhary"
}
// cousre {courseInstructor} = course

const {courseInstructor : instructor} = course
//console.log(cousrseInstructor);

console.log(instructor);


//jsons

// {
//   "name": "Anish",
//   "cousename": "mern stack"
//   "price": "999",
// }

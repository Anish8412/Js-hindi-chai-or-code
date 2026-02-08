//singleton
//object literls
const mySym = Symbol("key1")
const JsUser = {
  "full name": "anish kumar",
  [mySym]: "mykey1",
    age: 18,
    location: "faridabad",
    email : "anishk70925@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday", "saturday"]


}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.email = "Anish@rajput.com"
// Object.freeze (JsUser)
JsUser.email = "anishk70925@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
JsUser.greetingTwo = function(){
    console.log('hello Js user, ${this.name}');

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
}

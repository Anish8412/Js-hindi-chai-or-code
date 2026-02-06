//Dates
 
// let = myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreatedDate = new Date(2026, 0, 6)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023,0,23,4,3,33,32)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-02-14")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// console.log(Math.floor(Date.now()));



let newDate = new Date()
console.log (newDate);
console.log (newDate.getMonth() +1);
console.log (newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long"
})

//Array


const myArr =  [0, 1, 2, 3, 4]
const myHeors = ["shaktiman", "nagraj"]


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//Array methods

// myArr.push(6,6,)
// myArr.push() array ke last me array no add ho jata  hai
// myArr.pop()// array me se last array no remove ho jata hai

// myArr.unshift(7)// array ke first no me add ho jata hai
// myArr. shift // array ke fisrt no remeove ho jata hai

// console.log(myArr.includes(9));  boolean bata hai true or false
// console.log(myArr.indexOf(9));
// console.log(myArr);


// const newArr = myArr.join()// array or no 1 sath donno print ho jata hai
// console.log(newArr);


//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B",  myArr);

const myn2 = myArr.splice (1, 3)
console.log("c", myArr);
console.log(myn2)

// slice or splice 
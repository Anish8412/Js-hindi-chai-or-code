const userEmail = []


if (userEmail){
    console.log("got user email");

}else{
    console("don't have user email");
}

// falsy value

// false, 0, -0, bigInt 0n, "",null, undefined, NaN


if (userEmail.length === 0){
    console.log("Array is Empty");
}

// if (Object.keys(emptyObj).length=== 0){
//     console.log("object is empty");

// }
// false ==0 true  false == '' true,  0 == true

// nulish coalescing operator (??)  :null undefine
let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

// var1 = undefined ?? 15
 val1 = null ?? 10 ?? 20
 console.log(val1)



//  Terniary operator

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80")
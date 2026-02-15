// immedetly Invoked function Expression (IIfE)


(function chai (){
    console.log(`DB CONNECTED`);

})();



(function orcode (){
    //named IIFE
    console.log(`DB CONNECTED TWO`);
}

)();


((name) => {
    console.log(`DB CONNECTED TWO ${name} `);
})('Anish')
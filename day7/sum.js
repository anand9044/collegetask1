function add1(num){
    return num + 1;
    console.log("hello")//will not execute
}
add1(5);


let add2 = function(num){
    return num + 1;
}; //

add2(5);// calling a function expression 

//arrow function 

let add3 =(num) => {
    return num + 1;
}; //arroe function 


// IIFE ---> Immediately Invoked Function Expression 
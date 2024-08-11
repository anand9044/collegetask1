(function abc() {
    console.log('DB connection done');
})();

let x = function(){
    console.log("hi")
};

function y(x){

}

// when a function is passed in another function the function is pased is known as call back func


function one(){

    function two(){
        let x = 10 ;
      console.log(x);
    }
    two(); //two bahar nahi execute nahi hoga
}
one();

let rnum= Math.floor(Math.random() *(6-1+1)
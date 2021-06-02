// defining a function
function functionname() {
    // console.log("he is there");
    return 'hello'; //   return the value to the function called   
}
// calling a function
functionname();
a = functionname();
console.log(a);

// passing in parameters
var c;
function func(p1, p2) {
    c = p1 + p2;
    console.log(c);
}
func(10, 20); // values of p1 and p2 are passe from here
// passing parameter and overriding
var d;
function funct(p1 = 20, p2 = 30) {
    c = p1 + p2;
    console.log(d);
}
funct(10, 20); // values of p1 and p2 are passe from here and these values overide the values of p1p2
var e;
function functi(p1 = 20, p2 = 30) {
    c = p1 + p2;
    console.log(d);
}
functi(); //no values are passed here so default values are set
// function expressions
const square=function(z){
    return z*z;
}
console.log(square(10));
// 
// iife  shortfoarm of function
(function(name){    //declaration of function 
    console.log("it is working " +name)
})("saivivek");   // calling the function
 
// function inside an object
var z;
var daily={
    add: function function2(a1,a2){
        z=a1+a2;
        console.log(z);
    }
}
console.log(daily.addfunction2())
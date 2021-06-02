// if statement
var id = "100";

if (id == 100) {
    console.log("it is correct");
}
if (id != 100) {
    console.log("it is correct");
}
else {
    console.log("it is not correct")
}
// diff between double equalto and triple
if(id==="100"){
    console.log("correct")
}
else{
    console.log("incorrect")
}

// if else condition
var color="yellow";
if(color=="blue"){
console.log(color);
}
else if(color=="red"){
console.log(color);
}
else{
    console.log(color);
}
// ternery operators
console.log(id==="100" ? "correct" : "incorrect")

// switchcase
var z=200;
switch(z){
    case (z==100):
        console.log("color is blue");
        break;
        case (z==300):
            console.log("color is white");
            break;
            default:
                console.log("the color is red");
                break;
}
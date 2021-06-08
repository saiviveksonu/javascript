for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        console.log("stop the current execution and jump out of the loop");
        continue;
    }
    if (i == 5) {
        console.log("stop the whole loop execution");
        break;
    }
    console.log(i);
}
// while loop
var a = 0;  //initalization
while (a <= 10) {
    if(a==3){
    console.log(" current execution of loop is stoped");
    }
    console.log(a);
    a++;   //incrementing the operator   

}
// do while loop
var b=0;
do{
    console.log(b);
    b++;
}
while(b<=10);
// looping through array
var num=[1,2,3,44,5];
for(var i=0;i<=num.length;i++){
    if(num[i]>num[i+1]){
        console.log(num[i]);
        break;
    }
}
// for each array loop
num.forEach(function(x,y){
    if(num[y]>10){
        console.log(num[y]);

    }
// console.log(x,y);
})
// map method
const mixed=[{name:"saivivek",rollno:"ee16b1008",cgpa:7.5}];
var c=mixed.map(mapp);
console.log(c);
function mapp(z){
    return z.name;
}
// for in loop
const user ={
    firstname:"saivivek",lastname:"banoth",
    age:23
}
for(let d in user){
    console.log(user[d]); //prints the value    
    console.log(d) // prints the keys
}
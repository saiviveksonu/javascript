// creation of arrays
var firstarray=[1,2,3,4,5,6,77];
console.log(firstarray);
var secondarray= new Array(1.2,4,4,5,56);
console.log(secondarray);
// we can have any datatype inside an array
var thirdarray= new Array(1,2.3,"string",true,{a:1,b:2});
console.log(thirdarray);
// length of an array
var foutharray=[1,4,5,6,7,8];
console.log(foutharray.length);
// checking the array
var fiftharray=[1,2,3,4,5,6,7,8];
console.log(Array.isArray(fiftharray));
// getting a single value from a array
var sixtharray= new Array(1,2,3,4,5,6);
console.log(sixtharray[3 +"indexvalue"]);
// changing the value of an array
var seventharray=new Array(2,3,4,5,6,7);
console.log(seventharray[4]="sai");
// finding the indexvalue
console.log(seventharray.indexOf());
// mutating arrays
var num=[1,2,3,4,5,6,7];
var num2=[3,4,5]
console.log(num.push(120))
console.log(num.pop());
console.log(num.sort());
console.log(num.reverse());
console.log(num.slice(1,5));
console.log(num.splice(2,0,9,10));
console.log(num.concat(num2));
// find
var num3=[2,3,4,5,6,7];
function largernumber(num4){
return num4<10;
}
console.log(num3.find(largernumber));
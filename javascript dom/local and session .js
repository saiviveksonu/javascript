// let a=localStorage.setItem("name","saivivek");
// a=localStorage.setItem("age","23");
// let b=localStorage.getItem("name");
// console.log(b);
localStorage.clear();
console.log(document.querySelector("#task"));
var he,she;
document.querySelector("form").addEventListener("submit",function(e){
console.log(e);
he=document.querySelector("#task").value;
console.log(he);
let men;
if(localStorage.getItem("men")===null){
    men=[];
}else{
    men=JSON.parse(localStorage.getItem("men"));
}
console.log(men.push(he));
localStorage.setItem("men",JSON.stringify(men));
alert("task saved");
e.preventDefault();
});
console.log(men=localStorage.getItem("men"));
men.forEach(function(he){
    console.log(he);
});
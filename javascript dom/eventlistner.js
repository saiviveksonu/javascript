// event listner method
var a,b;
// selection of the element
a=document.querySelector(".clear-tasks");
console.log(a);
// adding the eventlistner method to the selected element
a.addEventListener("click",function(b){
    console.log(b.target.className.add("sai"));
})

// mouseevents
const clearbtn=document.querySelector(".clear-tasks");
console.log(clearbtn);
const card=document.querySelector(".card");
console.log(card);
const heading=document.querySelector("h5");
console.log(heading);
// click event
var d,e;
clearbtn.addEventListener("click",function(e){
    console.log(e.type);
});
// doubleclick
clearbtn.addEventListener("dbclick",function(e){
    console.log(e.type);
});
// mousedown
clearbtn.addEventListener("mousedown",function(e){
    console.log(e.type);
});
// mouseup
clearbtn.addEventListener("mouseup",function(e){
    console.log(e.type);
});
// mouseenter this event fireoff whe we go into the parent element
card.addEventListener("mouseenter",function(e){
    console.log(e.type);
});
// mouseleave this event fireoff whe we go into the parent element
card.addEventListener("mouseleave",function(e){
    console.log(e.type);
});
// mouseover this event fireoff whe we go into the child element
card.addEventListener("mouseover",function(e){
    console.log(e.type);
});
// mouseout this event fireoff whe we go into the child element
card.addEventListener("mouseout",function(e){
    console.log(e.type);
});

// form events
var f;
const form=document.querySelector("form");
const taskinput=document.getElementById("task");
// clear the input
taskinput.value="";
// submit event
// form event
form.addEventListener("submit",eventname);
// input events
taskinput.addEventListener("input",eventname);
taskinput.addEventListener("paste",eventname);
taskinput.addEventListener("cut",eventname);
taskinput.addEventListener("blur",eventname);
taskinput.addEventListener("focus",eventname);
taskinput.addEventListener("keypress",eventname);
taskinput.addEventListener("keydown",eventname);
taskinput.addEventListener("keyup",eventname); 
function eventname(f){
 console.log(f.type); 
 }
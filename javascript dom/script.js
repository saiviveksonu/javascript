// var val;
// val =document.links[0].classList;
// val=document.scripts[0].src;
// console.log(val);
// single element selectors
var elemrnt;
// by selecting the id we get an html tag
element=document.getElementById("task-title");
console.log(element);
// to select id from that thag
console.log(element.id);
// for styling the html tag
console.log(element.style.background="red");
console.log(element.style.color="#fff");
// changing the html
console.log(element.innerHTML);
console.log(element.innerText="sonu");
// queryclasses
var element2;
// css selector "id" is used
// document.queryselector("css selector");
element2=document.querySelector("#tasklist");
console.log(element.style.background="#333");
// css selector "class" is used below
element2=document.querySelector(".collection-item");
console.log(element2.style.color="#333");
// css selector html tag is used
element2=document.querySelector("h5");
console.log(element2.innerText="list");
// css combination selector
element2=document.querySelector("ul li");
console.log(element2.innerText="list");
// css child selector
element2=document.querySelector("ul:first-child");
console.log(element2);
// css nth child selector
// it will select the first odd child not every odd child
element2=document.querySelector("ul:nth-child(odd)");
console.log(element2);


// dom multiple selector
var item;
item=document.getElementsByClassName("collection-item");
console.log(item[1].style.color="red");
//selecting only the specific classes inside the block
item=document.querySelector("ul").getElementsByClassName("collection-item");
console.log(item[3].style.color="red");
// get elements by html tagname
item=document.getElementsByTagName("h5");
console.log(item);
// turning this item list into an array
var item2;
item2=Array.from(item);
console.log(item2);
// query selector all
var item3;
item3=document.querySelectorAll(".collection-item");
console.log(item3);
// since it is a nodelist we can execute the foreachloop
item3.forEach(function(li){
    console.log(li.style.color="red");
})
// nth child selector
item3=document.querySelectorAll("li:nth-child(even)");
for(let i=0;i<=item3.length;i++){
    console.log(item3[i].style.background="#000");
}


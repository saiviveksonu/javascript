// creation of a html element
const li=document.createElement("li");
console.log(li);
// adding a classname
li.className="collection-item";
console.log(li);
// addding a id
li.id="newitem"
console.log(li);
// setting an attribute
li.setAttribute("title","new-item");
console.log(li);
// create a textnode
// creating a textnode
var b=document.createTextNode("list5");
// insersetion of text inside the element
li.appendChild(b);
var c=document.querySelector("ul.collection");
console.log(c);
var d=c.appendChild(li);
// this method would insert the element at the last
console.log(d);
// insertion of a element before 
var h=document.createElement("li");
console.log(h);
h.className="collection-item";
h.id="newitem"
h.setAttribute("title","new-item");
var i=document.createTextNode("list2");
var j=h.appendChild(i);
var k=document.querySelectorAll("li");
var m=k[2];
console.log(m);
var l=document.insertBefore(j,m);
console.log(l);

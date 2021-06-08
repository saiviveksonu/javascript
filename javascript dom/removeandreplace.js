// replacing the element
// now we are going to replace the h5 tag with h3 and also change the text
// create the h3 element
const newheading=document.createElement("h3");
newheading.id="task-list";
var a=document.createTextNode("new task");
var b=newheading.appendChild(a);
console.log(newheading);
// select the element you want to replace
var oldheading=document.querySelector("h5#task-title");
console.log(oldheading);
// select the parent element
var parent1=oldheading.parentElement;
console.log(parent1);
var f=parent1.replaceChild(newheading,oldheading)
console.log(f);
// removing an item
// selecting direct li tag and removing
const lis=document.querySelectorAll("li");
console.log(lis);
var del=lis[3].remove();
console.log(del);
// selecting the parent element and removing the child
const list=document.querySelector("ul");
 var child=list.removeChild(lis[2]);
 console.log(child);
// adding and removing classes
const first=document.querySelector("li");
console.log(first);
const link=first.children;
console.log(link);
link.className;
console.log(link);
some=link.classList;
console.log(link);
link.classlist[0];
console.log(link);
link.classlist.add("test");
console.log(link);
link.classlist.remove("test");
console.log(link);
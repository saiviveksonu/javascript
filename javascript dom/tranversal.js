var val;
// we are selecting the parent element by this code
const list=document.querySelector("ul.collection");
console.log(list);
// we are selecting the parent element storing in listitem variable
const listitem=document.querySelector('li.collection-item:first-child');
console.log(listitem);
// getting the children of the parent list
val=list.children[0].style.background="#333";
console.log(val);
// getting the children of the parent listitem
val=listitem.children[0].style.background="blue";
console.log(val);
// child list contains spaces also included init
val=list.childNodes[0].nodeName;
val=list.childNodes[1].nodeType;
console.log(val);
// to find the children of children
val=listitem.nextElementSibling;
console.log(val);
val=listitem.nextSibling;
console.log(val);
// to target only the first child
val=list.firstChild.textContent="list1";
console.log(val);
val=list.firstElementChild.children;
console.log(val);
// obtaing the parent node
val=listitem.parentElement;
console.log(val);
val=list.parentElement.children;
console.log(val);
// it gives the value including the text also
val=listitem.parentNode;
console.log(val);
// sibling selector
val=listitem.nextElementSibling;
console.log(val);
val=listitem.nextSibling;
console.log(val);
// previous element sibiling
val=listitem.previousElementSibling;
console.log(val);
val=listitem.previousSibling;
console.log(val);

// event delegation
var a,b,e;
a=document.querySelector(".delete-item");
// with the help of this we can make a event on a single element
b=a.addEventListener("click",function(){
    // console.log("deleteitem");
})
// to make a event on multiple similar classes
document.body.addEventListener("click",deleteitem);
// wherever we click on the body this event happens
function deleteitem(e){
    // whever we click on the body targeted element is displayed
    if(e.target.parentElement.classList.contains("delete-item secondary-content")){
        console.log("delete-item");
        e.target.parentElement.remove();
    }
    // logic for targeting the specific element
}



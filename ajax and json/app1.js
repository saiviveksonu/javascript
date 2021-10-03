document.getElementById("button1").addEventListener("click",loadcustomer);
function loadcustomer(){
    const xhr=new XMLHttpRequest();

    xhr.open("get","customer.json",true);
    xhr.onload=function(){
       if(this.status===200){
           console.log(this.responseText);
           const customer=JSON.parse(this.responseText); 
           const unorderedlist=document.createElement("ul");
           const list=document.createElement("li");
           const list1=document.createElement("li");
           const list2=document.createElement("li");
           const list3=document.createElement("li");
           list.append(document.createTextNode(customer.id));
           list1.append(document.createTextNode(customer.name));
           list2.append(document.createTextNode(customer.company));
           list3.append(document.createTextNode(customer.phone));
       unorderedlist.appendChild(list);
       unorderedlist.appendChild(list1);
       unorderedlist.appendChild(list2);
       unorderedlist.appendChild(list3);
       console.log(unorderedlist);
       document.getElementById("customer").appendChild(unorderedlist)
        } 
    }
    xhr.send();
}
// loading of multiple customers
document.getElementById("button2").addEventListener("click",loadcustomers);
function loadcustomers(){
    const xhr=new XMLHttpRequest();

    xhr.open("get","customers.json",true);
    xhr.onload=function(){
       if(this.status===200){
        const customers = JSON.parse(this.responseText);
           let output = '';
           customers.forEach(function(customer){
            // creating a ul using object literals
             output += `
             <ul>
               <li>ID: ${customer.id}</li>
               <li>Name: ${customer.name}</li>
               <li>Company: ${customer.company}</li>
               <li>Phone: ${customer.phone}</li>
             </ul>
           `;
           });
     
           document.getElementById('customers').innerHTML = output;
       } 
    }
    xhr.send();
}
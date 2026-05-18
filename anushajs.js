
let count=10



console.log("hello friends")

function submit_data(){
    
    console.log(count)
let username=document.getElementById("a_one").value;
let email=document.getElementById("a_two").value;
console.log(username)
console.log(email)

let aa=document.createElement("li");
let bb=document .getElementById("header");

if(username==="anusha"&& email.includes("@gmail.com")){
    console.log(aa);
    aa.textContent=username+  " " +email;
    bb.appendChild(aa);

    let bbb=document.getElementById("bbb")
    let h=document.createElementNS("p");
    h.textContent="you exceed element"
    
    
}
}

 
console.log("hello friends");
let count;
let anu;g
let a=document.createElement("p");

function submit_data(){
let start= parseInt(document.getElementById("first").value);
let stop= parseInt(document.getElementById("last").value);

let b=document.getElementById("header_b");
if(start>stop){
    count=start;
} 
    else{
    count=stop;
}

function data(){
    count--
    console.log(count);
    a.textContent=count;
    b.appendChild(a);
    if(count===0){
        a.textContent="time exceed";
        a.style.color="orange";
        clearInterval(anu);
        }
    }
    
anu=setInterval(data,1000);
}
function submit_data1(){
    clearInterval(anu);
    a.textContent="you stopped this";
    a.style.color="red";
}



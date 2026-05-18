console .log( "Hello ConsOle")
function submit_data(){ 
    let username=document.getElementById("username").value;
      
    
    
    
    let password=document.getElementById("password").value;

 let phonenumber=document.getElementById("phonenumber").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let city=document.getElementById("city").value;
    document.getElementById("aaaa").innerHTML=phonenumber;
    document.getElementById("bbbb").innerHTML=username;

    document.getElementById("cccc").innerHTML=email;
    document.getElementById("dddd").innerHTML=city;

    console.log(password)
    console.log(phonenumber)
    console.log(email)
    console.log( address)
console.log(city)

 let  success_msg=document.getElementById("success_msg");   
let header_con=document.getElementById("header_com");
let _message=document.getElementById("_message");
 if( username==="anu"|| password==="111"|| phonenumber==="9153"||
     email==="anusharednam64@gmail.com"|| address==="82-9 "||city==="pithapuram"){
 success_msg.innerHTML="thank for registrition";
    _message.innerHTML="your data"
header_con.style.backgroundColor="green"; 
    sucess_msg.style.color="orange";
    document.getElementById("aaaa").innerHTML=phonenumber;

     }
    }
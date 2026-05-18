console.log("hello");
let default_width=100;
let dog_b=document.getElementById("dog_b")
function click_onn(){
 default_width=default_width+30
dog_b.style.width=default_width+"px";
let click_onn=document.getElementById("click_onn");
if(default_width>=300){
    default_width=300;
    click_onn.innerHTML="you exceed the limit";
    click_onn.style.backgroundColor="orange";
}
}
function click_off(){
    default_width=default_width-10;
    dog_b.style.width=default_width+"px";
    let click_off=document.getElementById("click_off");
    if(default_width<=100){
        default_width=100;
click_off.innerHTML="you can't decrease width";
click_off.style.backgroundColor="green";

}
}




    

    

    



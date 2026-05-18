
function greet(name="anu"){
    console.log("hello"+name);
}
greet();
greet("hanu");

    function  mainfunction(callback){
    callback();
    }
    function anusha(){
        console.log("hello");
}
    mainfunction(anusha);

function add(a,b){
    return a+b;

}
let result=add(10,20);
console.log(result);
 

let hasi=function(name="guest",subgreet){
       
}
function subgreet(){
    console.log("hai friends")}
    hasi("function",subgreet())


    function sai(name="guest"){
        console.log("hello,"+name);
}
sai();
sai("ram");

let numbers=[10,20,30,40];
console.log(numbers.find (n=>n>10));

let array=[1,2,3,4,5,6,7];
console.log(array.includes(3));

let names=[1,2,3,4,5,6];
console.log(names.slice(1,5));





let a=[1,2,3];
let b=[4,5,6];
console.log(a.concat(b));

let anu=[2,45,66,13]
console.log(anu.sort((a,b)=>a-b));

let ammu=["ant","dog","fan","cat"];
console.log(ammu.reverse());

let nums=['1','2'];
console.log(nums.join('-'));

let usha=[8,9,6,7,];
let aa=usha.splice(4,4,9);
console.log(usha)









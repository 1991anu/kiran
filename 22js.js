let num =[ 100,200,300,400];
console.log(num.length);
let  names=[ "puppy","tommy"," bunny","chinnu"];
names.push("lucky");
console.log(names);
let flowers=[  "rose", "lilly", "sunflower","marygold"];
flowers.shift();

console.log(flowers)
let friuts =[ "apple","banana", "graps"];
friuts.unshift("cherry");
console.log( friuts);
let veg=["tomoto", "pototo ","onion","radesh","carrot", "chilli"];
console.log(veg[3]);

let animals=["cat"," goat", "dog", "hen","lion"];
animals.pop();
console.log(animals);
let max="40";
console.log(typeof(max));

let obj_data={name:"anusha",num:333};
console.log( obj_data["name"]);




 


     
console.log("Hello");
let arry_data=[1,3,4,"Hello",8];
console.log(arry_data)

let numbers=[10,20,30];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

    let fruits=["apple","mango","orange"];
    fruits.forEach((item,index)=>{
        console.log(index,item);
    });


    let nums=[1,2,3];
    let result=nums.map((item)=>{
        return item*2;
    });
    console.log(result);

    let ages=[12 ,18,25,10,20];
    let adults=ages.filter((item)=>{
        return item>=18;
    });
        console.log(adults);
    

let greet=function(name="guest",subgreet){
    console.log("welcome=name");//welcome guest=var
}
function subgreet(){
    console.log("what is your name")}

    greet("anusha",subgreet())


    
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












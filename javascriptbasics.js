for(let step=0; step<5; step++){           //for loop
    console.log("walking east one step");
}




//while loop
let n=0;
let x=0;
while(n<3){
    n++;
    x+=n;
    console.log(x);
}


let i=0;
do{
    i+=1;
    console.log("value of i",i);
}while(i < 5);


function greet(name){
    console.log(`hello, ${name}!`);
}
greet("Anju")



const greet2 = function(name){
    console.log(`hello`,name);
};
greet2("Anju")

const greet3=(name)=>{
    console.log(`hello`,name);
};
greet3("Anju")

var str="hello world";
console.log(str)
var num=123;
console.log(num)
var bool=true;
console.log(bool)
var nullvar=null;
console.log(nullvar)
var undefvar=undefined;
console.log(undefvar)
var BigInt=122235647856872456784567485647856784n;
var sym=Symbol("hello world");
var obj={name:"john",age:30};
var arr=[1,2,3,4,5];




let fruits=["Apple","Banana","cherry"]
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("grapes");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length)






























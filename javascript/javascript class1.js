// alert("hello world");   
// prompt("Enter Your Name");
// confirm("Today date is 08/01/2024");
console.log("welcome to console");
document.write("document text");
console.error("404 error  found");
console.warn("Note warning!")
console.info("this s a information");
console.debug("start debugging");
isworking=false; 
console.assert(isworking,"boolean");
obj={
    id:1,
    name:"username",
    year:2024,
}
console.log(obj);
console.table(obj);
//console.clear();
var a=10;
let b=20;
const c=30;
document.write(a,b,c);

//different data types : int, float, long, double, char string
//no need to mention the data type ehile storing the value
//data types will be assumed automatically based on type of value

let d=[10,20,30];
console.log(`d=${d}`);
let obj1={
    name: "prasanna",
    age: 26,

};
document.write("<br>name: ",obj1.name, "<br> age: ",obj1.age);
console.log(obj1);
//templateliteral: `${}`: ECMA: 6
document.write(`<br>name=${obj1.name}<br>age=${obj1.age}`);
let k=50;
document.write(`<br>k=${k}<br>`);
document.write(`<br>d[0]=${d[0]}<br>d[1]=${d[1]}<br>d[3]=${d[2]}`);

//array of object
let obj2=[{
    name: "prasanna",  
    age: 26,

    
},
{
    name: "kumar",
    age: 27, 
}];

document.write(` name=${obj2[1].name}`);

console.log(`name=${obj2[1].name}`);
//age = 25; //initialization 
let num1=Number(document.getElementById("i1").value);
let num2=Number(document.getElementById("i2").value);

//person1Age=26; //variable name should be in camel case 
// firstName="Prasanna";
// salary=30000.50; 
// experience=true; //it is used to check wheather the statement is right or wrong

student=[1,2,3,"apple",4,5];

student1={
    id:1,
    fruitName:"apple",
    price:"50rs"
};

// function sum(){
//     set of code;
// }
// var firstName="prasanna";
// let lastName="kumar";
// const age=26;

//document.write("FirstName=" ,firstName); //updated concattination is ","
//document.write(`FirstName= ${firstName} <br> LastNme=${lastName}`); //template literal

 //var fname="prasanna kumar";

 let  fname="prasanna kumar";

 let lname="prasanna kumar";

 

//document.write(`first name=${fname}`);
function add(){
// let input1=document.getElementById("i1").value;
// let input2=document.getElementById("i2").value;
document.getElementById("h1").innerHTML=input1+input2;
}


 let res=()=>{
    
    document.getElementById("h1").innerHTML=num1+num2;
 }

 
 document.getElementById("g1").addEventListener("click",()=>{
   
    document.getElementById("h1").innerHTML=num1-num2;

 })
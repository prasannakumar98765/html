let i=20;
while(i>10){
 document.write(`hello <br> ${i}`);
    i--; 
}

document.write("<br>","Do-While loop");
j = 10
do{
    document.write(`world<br>`);
    j--;
}while(j>0);

document.write("for loop");

for(k=0;k<10;k++){
    document.write(`<br>hello=${k}`);
}

for(let i=0;i<10;i++){
    document.write(`<br>row=${i}`)
    for(let j=0;j<10;j++){
        document.write(`column:${j}`);
    }
}

i=["apple","bananna","orange"];
for(j=0;j<i.length;j++){
    document.write(`<BR>[${j}]=${i[j]}<br>`);
}


document.write(`<br>forin`);
for (k in i) {
    document.write(`<br>[${k}]=${i[k]}`);
}

for(g of i){
    document.write(`<br>${g}`);
}

var obj={
    name:"username",
    id:20,
    gender:"male"
};
 
for(d in obj){
    document.write(`<br>${d}=${obj}`);
}



let mapar=i.map((jai)=>{
return `${jai}`;
})
document.write(`<br>${mapar}`);
 
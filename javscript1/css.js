document.getElementById("h2").addEventListener("mouseover",(e)=>{
    e.preventDefault();
        document.getElementById("h2").classList.toggle("info","info1"); 
})

let a1=document.createElement("a");
a1.textContent="qwertyuioasdfghjjk";
let a2=document.getElementById("h1");
document.body.insertBefore(a1,a2);

document.getElementById("p1").insertAdjacentHTML("beforeend","ppioupiuoihojkno")


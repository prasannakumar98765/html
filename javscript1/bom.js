console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(document.documentElement.clientHeight)
console.log(document.documentElement.clientWidth)
document.getElementById("button1").addEventListener("click",()=>{
   let s= window.open("https://www.facebook.com/","Log in","height=600,width=600")
   setTimeout(()=>{
        s.close();
   },3000);
    
})
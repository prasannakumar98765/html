
function subdat(e){
    e.preventDefault();
    let exp=document.getElementById("input3").value;
   // let price2=document.getElementById("input4").value;
   let dept=document.getElementById("department").value;

   if(dept=="sales")
   {
    
   if(exp<=2)
    {
        document.getElementById("experience").innerHTML="5000 rs increament";
    }
    else if(exp<=5){
        document.getElementById("experience").innerHTML="10000 rs increament";
    }

    else{
        document.getElementById("experience").innerHTML="no increament";
    } 
   
}
else{
    document.getElementById("experience").innerHTML="not increament";
} 

}

    

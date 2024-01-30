function department(e){
 

  switch(e.target.getAttribute("id")){

        case "sales":
            document.getElementById("p1").innerHTML="This is a sales department";
        break;
        
        case "service":
            document.getElementById("p1").innerHTML="This is a sevice department";
            break;

         case "dev":
                document.getElementById("p1").innerHTML="This is a devlopment department";
                break;

           case "execute":
                document.getElementById("p1").innerHTML="This is a Executive department";
                break;

        default:
            document.getElementById("p1").innerHTML="not selected";
            break;
            }  }
        

            // function addoper(){

            // }
            // addoper();

            //   let op=(a,b)=>{
            //     let su=a-b;
            //     document.write(`<br> subtraction=${su}`);
            // }
            // op(20,10); -> this type of function can be called inside addeventlistner

            document.getElementById("b1").addEventListener("click",()=>{
                let num1=Number(document.getElementById("in1").value);
                let num2=Number(document.getElementById("in2").value);
                c=num1+num2;
                document.getElementById("res").innerHTML=c;
            });
        
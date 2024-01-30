const products=[{p_id:1,p_name:"AC",p_price:20000,p_image:"image/ac image.jpg"},
{ p_id:2, p_name:"AC",p_price:15000,p_image:"image/ac image.jpg"},
{ p_id:3, p_name:"Refridgerator", p_price:25000, p_image:"image/Double_Door_Refrigerator.jpg"},
{p_id:4, p_name:"Washing Machine", p_price:30000, p_image:"image/washing machine img.jpg"},
{p_id:5, p_name:"Washing Machine", p_price:35000, p_image:"image/washing machineimg1.jpg"},
{p_id:6, p_name:"TV", p_price:28000, p_image:"image/tv img 1.jpg"},
{p_id:7, p_name:"TV", p_price:36000, p_image:"image/tv img 2.jpg"},
{p_id:8, p_name:"Sofa", p_price:14000, p_image:"image/sofa img.jpg"},
{p_id:9, p_name:"sofa", p_price:18000, p_image:"image/sofa img1.jpg"}]

// let pro=products.map((prod)=>{
//     return `${prod.products}`
// })

// document.getElementById("h2").addEventListener('click',()=>{let product=products.map((prod)=>{
//     return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
//      product name: ${prod.p_name} <br> 
//      product price: ${prod.p_price} <br> 
//    `
// }).join("")

// document.write(product);
// })

document.getElementById("h2").addEventListener('click',()=>{document.getElementById("dv").innerHTML=products.map((prod)=>{
    return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
     product name: ${prod.p_name} <br> 
     product price: ${prod.p_price} <br> 
   `
}).join("")


})


 let tv=products.filter((fill)=>fill.p_name=="TV");
 document.getElementById("h3").addEventListener("click",()=>
document.getElementById("dv").innerHTML=tv.map((prod)=>{
    return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
     product name: ${prod.p_name} <br> 
     product price: ${prod.p_price} <br> 
   `
}).join("")

)

document.getElementById("b1").addEventListener("click",()=>{
    obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
    products.push(obj);
    console.log(products);
    document.getElementById("dv").innerHTML=products.map((prod)=>{
        return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
         product name: ${prod.p_name} <br> 
         product price: ${prod.p_price} <br> 
       `
    }).join("")
    
})

document.getElementById("b2").addEventListener("click",()=>{
  obj1={p_id:11, p_name:"fridge",p_price:35000,p_image:"image/fridge.jpg"}
  products.unshift(obj1);
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price}.toUpperCase()<br> 
     `
  }).join("")
  
})

document.getElementById("b3").addEventListener("click",()=>{
    obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
    products.splice(2,1,obj); //splice(2,1,obj)->1-one defines for delete and replace 
    console.log(products);
    document.getElementById("dv").innerHTML=products.map((prod)=>{
        return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
         product name: ${prod.p_name} <br> 
         product price: ${prod.p_price} <br> 
       `
    }).join("")
    
})
document.getElementById("b3").addEventListener("click",()=>{
  obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
  products.splice(2,0,obj); //splice(2,0,obj)->0-zero defines for moving and replace 
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br> 
     `
  }).join("")
  
})
document.getElementById("b4").addEventListener("click",()=>{
  obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
  products.pop(obj);
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br> 
     `
  }).join("")
  
})

document.getElementById("b5").addEventListener("click",()=>{
  obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
  products.shift(obj);
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br> 
     `
  }).join("")
  
})

document.getElementById("b6").addEventListener("click",()=>{
  obj={p_id:10, p_name:"fridge",p_price:45000,p_image:"image/fridge.jpg"}
  let update=products.findIndex((prime)=>{
    return prime.p_id==1
  });
  products[update].p_price=22000
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br>  
     `
  }).join("")
  
})

document.getElementById("b6").addEventListener("click",()=>{
 
  
  console.log(products);
  document.getElementById("dv").innerHTML=products.map((prod)=>{
    if(prod.p_name=="AC"){
      prod.p_price=7000;
    }
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br> 
     `
  }).join("")
  
})

document.getElementById("b7").addEventListener("click",()=>{
  console.log(products);
  let max =products.sort((net,kit)=>{
    return (net.p_price<kit.p_price||net.p_name>kit.p_name)?-1:0;
  })
  document.getElementById("dv").innerHTML=max.map((prod)=>{
   
      return `<br><img src="${prod.p_image}" height="120px" width="120px"><br>product id: ${prod.p_id} <br> 
       product name: ${prod.p_name} <br> 
       product price: ${prod.p_price} <br> 
     `
  }).join("")
  
})

let ken=document.createElement("h1");
let par=document.createTextNode("document object module");
ken.appendChild(par);
document.body.appendChild(ken);

document.getElementById("dy1").addEventListener("click",()=>{
  let s1=document.createElement("form");
  s1.setAttribute("method","post");
  s1.setAttribute("enctype","multipart/form-data");

  let inp1=document.createElement("input");
  inp1.setAttribute("placeholder","Enter Name");
  inp1.setAttribute("type","text");
  inp1.setAttribute("name","pname");
    
  let inp2=document.createElement("input")
  inp2.setAttribute("placeholder","Enter Price");
  inp2.setAttribute("type","number");
  inp2.setAttribute("name","pprice");

  let inp3=document.createElement("input")
  inp3.setAttribute("placeholder","Id no")
  inp3.setAttribute("type","number")
  inp3.setAttribute("name","pid");

    
  let inp6=document.createElement("input")
  inp6.setAttribute("type","file")
  inp6.setAttribute("name","pimage");
  inp6.setAttribute("accept","image/*");

  let inp5=document.createElement("input")
  inp5.setAttribute("type","submit")
  inp5.setAttribute("value","add")
  inp5.setAttribute("name","click");
  inp5.setAttribute("onclick","getValueUser")
  
  document.body.appendChild(s1);
  s1.appendChild(inp1);
  let b=document.createElement("br")
  let c=document.createElement("br")
  s1.appendChild(b);
  s1.appendChild(c);
  s1.appendChild(inp2);
  let d=document.createElement("br")
  let e=document.createElement("br")
  s1.appendChild(d);
  s1.appendChild(e);
  s1.appendChild(inp3);
  let f=document.createElement("br")
  let g=document.createElement("br")
  s1.appendChild(f);
  s1.appendChild(g);
  s1.appendChild(inp6);
  let h=document.createElement("br")
  let i=document.createElement("br")
  s1.appendChild(h);
  s1.appendChild(i);
  s1.appendChild(inp5);
  
let getValueUser=()=>{
    let addobj={
      p_id:document.getElementsByName("pid").value,
      p_name:document.getElementsByName("pname").value,
      p_price:document.getElementsByName("pprice").value,
      p_image:"image/".concat(pimage.file[0].name)
    }
}


 })
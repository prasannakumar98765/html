let an;  //decleration
 an=2; //initialization
// let ab=null; //null is a primitive data type

console.log(an);
let objc=[{
    pId:1,
    pName:"headset",
    price:"30rs",
    pImage:"images/headset.jpg"
},
{
    pId:2,
    pName:"camera",
    price:"30rs",
    pImage:"images/camera.jpg"
},{

}];
let heading="Products";
console.log("product id=",objc[0].pId);
console.log("product name=",objc[1]["pName"]);
document.write(`product price=${objc.price}`);
//document.write(`<h1>${heading}</h1>`);
document.write(`<br><img src=${objc[0].pImage}><br>Produc name: ${objc[0].pName}<br>Product Price: ${objc[0].price}<br>Product id: ${objc[0].pId}`);

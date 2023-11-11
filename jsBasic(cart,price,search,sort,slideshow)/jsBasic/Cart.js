

let arr=JSON.parse(localStorage.getItem("dataStore"))||[];
console.log(arr);
displayTable(arr)

function displayTable(arr){
    let totalPrice=document.getElementById("price");
    let AddToCart=document.getElementById("cart");
    let total=0;
    let cart=0;
    let box= document.getElementById("box");
    box.innerText="";
    arr.forEach((elem,index)=>{
        total=total+Number(elem.price);
        cart++;
        let div=document.createElement("div");
        let name=document.createElement("p");
       name.innerText=elem.title;
       let price=document.createElement("p");
       price.innerText=elem.price;
       let category=document.createElement("p");
       category.innerText=elem.category;
       let description=document.createElement("p");
       description.innerText=elem.description;
       let image=document.createElement("img");
       image.src=elem.image;
       let del=document.createElement("button");
       del.innerText="delete product";
       del.addEventListener("click",function(){
         delfunc(index)
       })
       div.append(image,name,price,category,description,del);
       box.append(div);
       totalPrice.textContent=total;
       AddToCart.innerText=cart;
    })
}



function delfunc(index){
    arr.splice(index,1);
    localStorage.setItem("dataStore",JSON.stringify(arr));
    displayTable(arr);
}


let arr=JSON.parse(localStorage.getItem("pro"))||[];
console.log(arr);
displayTable(arr);


function displayTable(arr){
    box.innerHTML=""
    let cart=document.getElementById("cart");
    let myprice=document.getElementById("price");
     
      let product=0;
      let totalPrice=0;
    arr.forEach((elem,index)=>{
        product++;
        totalPrice=totalPrice+Number(elem.price);

        let box=document.getElementById("box");
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=elem.name;
        let category=document.createElement("p");
        category.innerText=elem.category;
        let image=document.createElement("img");
        image.src=elem.image;
        let price=document.createElement("h1");
        price.innerText=elem.price;
        let gender=document.createElement("p");
        gender.innerText=elem.gender;
        
        let del=document.createElement("button");
        del.innerText="delete product";
        del.addEventListener("click",function(){
            delproduct(index)
        })
        div.append(image,name,category,price,gender,del);
        box.append(div);
        cart.innerText=product;
        myprice.textContent=totalPrice;
    })
}

function delproduct(index){
    arr.splice(index,1);
    displayTable(arr);
    localStorage.setItem("pro",JSON.stringify(arr));
}

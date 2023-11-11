
function slideshow(){
   

    let arr=[
        "https://images.unsplash.com/photo-1693968337977-50671f6c4c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://plus.unsplash.com/premium_photo-1676636593318-de83c77c6b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ]

    let box=document.getElementById("ss");
    let image=document.createElement("img");

    let i=0;
    image.src=arr[1];
    box.append(image)
    i++;
   
    setInterval(function(){
    if(i==2){
        i=0;
    }
    image.src=arr[i];
    i++;
    box.append(image)

    },1000)
}
slideshow();


let data;
async function showProduct(){
   
    let res=await fetch(`https://fakestoreapi.com/products`);
    data=await res.json();

    appendData(data)
    //console.log(data)
}
showProduct();




function appendData(data){
      let box= document.getElementById("box");
      box.innerText="";

    data.forEach((elem)=>{
       let div= document.createElement("div");
       let name=document.createElement("p");
       name.innerText=elem.title;
       let price=document.createElement("p");
       price.innerText=elem.price;
       let category=document.createElement("p");
       category.innerText=elem.category;
       let description=document.createElement("p");
       description.innerText=elem.description;
       let myimage=document.createElement("img");
       myimage.src=elem.image;
       
       let AddToCart=document.createElement("button");
       AddToCart.innerText="add to cart";
       AddToCart.addEventListener("click",function(){
        cart(elem)
       })
       div.append(myimage,name,price,category,description,AddToCart);
       box.append(div);
    })

}


let arr=JSON.parse(localStorage.getItem("dataStore"))||[];
function cart(elem){
arr.push(elem);
localStorage.setItem("dataStore",JSON.stringify(arr))
}


function highToLow(){
    data=data.sort(function(a,b){
      return b.price-a.price;
    })
    console.log(data)
    appendData(data)
}

function LowToHigh(){
    data=data.sort(function(a,b){
      return a.price-b.price;
    })
    console.log(data)
    appendData(data)
}



function filter(){
    let query=document.getElementById("query").value;

    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query)
    })
    appendData(copy_data);
}



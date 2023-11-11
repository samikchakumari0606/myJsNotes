// console.log("product")

function productConstructor(n,c,i,p,g){
    this.name=n;
    this.category=c;
    this.image=i;
    this.price=p;
    this.gender=g;
}


let arr=JSON.parse(localStorage.getItem("pro"))||[];
function add(event){
     event.preventDefault();
    let form=document.getElementById("form");
    let name=document.getElementById("name").value;
    let category=document.getElementById("category").value;
    let image=document.getElementById("image").value;
    let price=document.getElementById("price").value;
    let gender=document.getElementById("gender").value;

    let obj= new productConstructor(name,category,image,price,gender);
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("pro",JSON.stringify(arr));
    

}

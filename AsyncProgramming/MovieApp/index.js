console.log("home pag");

function slideshow(){

    let arr=
    ['https://wallpapercave.com/dwp1x/wp8807385.jpg',
    'https://wallpapercave.com/dwp1x/wp8807414.jpg']

    let box=document.getElementById("box");
    let image=document.createElement("img");
      
    let i=0;
    image.src=arr[0];
    box.append(image);
    i++;
    
    setInterval(function(){
      if(i==2){
        i=0
      }
     image.src=arr[i];
     box.append(image);
     i++;

    },1000)

    
}
// slideshow();


let List=[
 
    {
        name:"Phobla",
        rating:6,
        img:"https://i.pinimg.com/236x/fd/0d/9d/fd0d9d4c85d3dcf09fa6f8526ed40458.jpg",
    },
    
    {
        name:'The Jungle Book',
        rating:9,
        img:"https://i.pinimg.com/236x/34/69/5c/34695caa9cf423e7680a92952a699fd1.jpg",
    },

    {
        name:"Ki & Ka",
        rating:5,
        img:"https://i.pinimg.com/236x/42/b7/06/42b706fa6b94dfdd03209063b26fe52f.jpg"
    },

    {
        name:"Bajirao Mastani",
        rating:"7" ,
        img:"https://i.pinimg.com/236x/4b/83/83/4b83830289033abadd8892538793a21e.jpg"
    },

    {
        name:"Sanam Teri Kasam",
        rating:4,
        img:"https://i.pinimg.com/236x/4b/9e/eb/4b9eeb978011485a563d90ba5f59f2ae.jpg"
    },

    {
        name:"Airlift",
        rating:8,
        img:"https://i.pinimg.com/236x/97/c9/b1/97c9b18f3aa3bc41b94f17ccf5068837.jpg"
    },

    {
        name:"Masan",
        rating:9,
        img:"https://i.pinimg.com/236x/da/15/81/da1581be1c2ab284cfb07b8b3f3c0b39.jpg"
    },
    {
        name:"Bhag Milkha Bhag",
        rating:10,
        img:"https://i.pinimg.com/236x/cb/96/f7/cb96f766487640fda1ce8fc04a88a9a9.jpg"
    },
    {
        name:"Aashiqui 2",
        rating:10,
        img:"https://i.pinimg.com/236x/fa/90/58/fa90586f6e43ee7c78207146b636bd81.jpg"
    }
    
]


localStorage.setItem("list",JSON.stringify(List));
let myMovieList=JSON.parse(localStorage.getItem("list"))||[]

function appendMovie(myMovieList){
    
    let container=document.getElementById("container");
    container.innerHTML="";
    myMovieList.forEach((elem)=>{
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=elem.name;
        let rating=document.createElement("h3");
        rating.innerText=elem.rating;
        let img=document.createElement("img");
        img.src=elem.img;
        div.append(img,name,rating);
        container.append(div);
    })
   
}

// appendMovie(myMovieList);


let getmyMovie=new Promise(function(resolve,reject){

   setTimeout(function(){
    
    let data=myMovieList;
    if(data!=null){
        resolve(data)
    }
    else{
        reject("data not found")
    }
   },3000)
   

})


getmyMovie.then(function(resolve){
     appendMovie(myMovieList)
})
.catch((err)=>{
    console.log(err)
})


function HighToLow(){
    let myMovieList=JSON.parse(localStorage.getItem("list"))||[];
     myMovieList= myMovieList.sort((a,b)=>b.rating-a.rating)
     appendMovie(myMovieList);
}

function LowToHigh(){
    let myMovieList=JSON.parse(localStorage.getItem("list"))||[];
     myMovieList= myMovieList.sort((a,b)=>a.rating-b.rating)
     appendMovie(myMovieList);
}
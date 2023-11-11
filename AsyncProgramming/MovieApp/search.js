
let data;
async function search(){
   try{
    let query=document.getElementById("query").value;
    let res=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fcbdda70&s=${query}`);
    data=await res.json();
    appendMovie(data.Search);
    console.log(data)
   }
   catch(err){
    console.log(err,"err")
   }
}
// search();


function appendMovie(data){
    if(data==undefined){
        return false
    }
    let box=document.getElementById("box");
    box.innerHTML="";
    data.forEach((elem)=>{
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=elem.Title;
        let image=document.createElement("img");
        image.src=elem.Poster
        let year=document.createElement("p");
        year.innerText=elem.Year;
        div.append(name,image,year);
        box.append(div);
    }) 
}


// function LowToHigh(){
//     data=data.sort(function(a,b){
//         return a.Year-b.Year
//     });
//     console.log(data);
// }


//debouncing
let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
        func()
    },delay)
}
 let box=document.getElementById("box");
//  let my_api='AIzaSyBFvVtDXAGguqn3TE-k4Yznb-gknLRZlZg';
 async function search(){
    let query=document.getElementById("query").value;
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${my_api}`);
    let data=await res.json();
    let youTube_videos=data.items;
    appendData(youTube_videos);
    console.log(data);
}

//trending videos

async function trendingVideos(){
    try{
     let query=document.getElementById("query").value;
     let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${my_api}&chart=mostPopular&regionCode=IN`);
     let data=await res.json();
     let youTube_videos=data.items;
     appendData(youTube_videos)
     console.log(appendData)
    }
    catch(err){

    }
}
trendingVideos();

function appendData(data){
    box.innerHTML=""
    data.forEach(({snippet,id})=>{
       
       let videoid=id.videoId;
       let thumbnailEl=snippet.thumbnails.high.url;
       let titleEl=snippet.title;
       let channelTitleEl=snippet.channelTitle;

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=thumbnailEl;
        let title=document.createElement("p");
        title.innerText=titleEl;
        let channelTitle=document.createElement("p");
        channelTitle.innerText=channelTitleEl;

        let data={
            videoid,
            snippet
        }

        div.onclick=()=>{
            storeClickedVideos(data);
        }

        div.append(img,title,channelTitle);
        box.append(div);
    })
}

function storeClickedVideos(data){
    localStorage.setItem("clicked_item",JSON.stringify(data));
     window.location.href="video.html";
}
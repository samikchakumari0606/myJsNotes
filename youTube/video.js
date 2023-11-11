
const video_details_div=document.getElementById("video_details_div");

function playVideo(){
    let {videoId}=JSON.stringify(localStorage.getItem("clicked_item"));
    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.width="100%";
    iframe.height="100%";
    iframe.setAttribute("allowfullscreen",true);
    video_details_div.append(iframe);
}
var song=document.querySelector("#mysong");
var ov=document.querySelector("#overlay");
var pg=document.querySelector("#page");
var tex=document.querySelector("#page h1");
var audio= new Audio("Tum hi ho Piano.mp3")
ov.addEventListener("click",function(){
       // mysong.play();
       audio.play()
       ov.style.display="none"
       tex.style.left="0"
       tex.style.top="15%"
})


// song 



// ov.onclick = function(){
//    mysong.play();
// }
console.log('This is Spotify app');
let songIndex=0;
const playButton = document.getElementById('playButton');
const gif = document.getElementsByClassName('gif-img');
const songItem = Array.from(document.getElementsByClassName('songItem'));
const cover=document.getElementsByClassName('cover');
const songName=document.getElementsByClassName('songName');
const play=document.getElementById('play');
const songItemName=Array.from(document.getElementsByClassName('songItemName'));
const progressBar=document.getElementById('progressBar');
const forwardButton=document.getElementById('forwardButton');
const backButton=document.getElementById('backButton');
const burger=document.getElementsByClassName('burger');



const songs = [
    {  musicpath: "/music/1.mp3", coverpath: "/cover/cover.jpg" ,songname:"Believer"},
    { musicpath: "/music/2.mp3", coverpath: "/cover/cover.jpg" ,songname:"Kedarnath"},
    { musicpath: "/music/3.mp3", coverpath: "/cover/cover.jpg" ,songname:"Kesariya"},
    { musicpath: "/music/4.mp3", coverpath: "/cover/cover.jpg" ,songname:"Pasoori"},
    { musicpath: "/music/5.mp3", coverpath: "/cover/cover.jpg" ,songname:"Excuses"},
    { musicpath: "/music/6.mp3", coverpath: "/cover/cover.jpg" ,songname:"Bekhayali "},
    { musicpath: "/music/7.mp3", coverpath: "/cover/cover.jpg" ,songname:"Brown Munde"},
    { musicpath: "/music/8.mp3", coverpath: "/cover/cover.jpg" ,songname:"Lakshya"}
]
const audioElement = new Audio('/music/5.mp3');
songItem.forEach((element, i) => {
    cover[i].src=songs[i].coverpath;
    songName[i].innerText=songs[i].songname;

});

// playButton.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         playButton.classList.remove('fa-play-circle');
//         playButton.classList.add('fa-pause-circle');
//     }
//     else {
//         audioElement.pause();
//         playButton.classList.remove('fa-pause-circle');
//         playButton.classList.add('fa-play-circle');
//     }
// });
const makeAllplay=()=>{
    songItemName.forEach(element =>{
        // console.log(element);
        
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};
audioElement.addEventListener('timeupdate',()=>{
    // console.log("time update");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
    
});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
});
songItemName.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`music/${songIndex}.mp3`;
        
        audioElement.currentTime=0;
        audioElement.play();
        playButton.classList.add('fa-pause-circle');
        playButton.classList.remove('fa-play-circle');
        
    }); 
});
forwardButton.addEventListener('click',()=>{
    if(songIndex>7){
        songIndex=1;
    }
    else{songIndex+=1};
    audioElement.src=`music/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    makeAllplay();
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');

    
    
})
backButton.addEventListener('click',()=>{
    if(songIndex==1){
        songIndex=8;
    }
    else{songIndex-=1};
    audioElement.src=`music/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    makeAllplay();
    document.getElementById(`${songIndex}`).classList.add('fa-pause-circle');
    document.getElementById(`${songIndex}`).classList.remove('fa-play-circle');


});


    

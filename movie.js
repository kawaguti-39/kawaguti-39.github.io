var v = document.getElementById('video');
let playsbutton = document.getElementById('plays');
playsbutton.onclick = playVideo;
   
function playVideo() {
        //動画を再生
        v.play();
    }

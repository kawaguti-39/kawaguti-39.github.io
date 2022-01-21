// function playVideo() {
//         //動画を再生
//         v.play();
//     }

// var v = document.getElementById('video');
// var playsbutton = document.getElementById('plays');
// playsbutton.onclick = playVideo;

document.addEventListener("DOMContentLoaded", function(event) {
      var scene = document.querySelector("a-scene");
      var video = document.getElementById("load_movie");

      if (scene.hasLoaded) {
        run();
      } else {
        scene.addEventListener("loaded", run);
      }

      function run () {
        scene.querySelector("#playButton").addEventListener("click", function(e){
              video.play();
          });
      }

    })

    AFRAME.registerComponent('click-stop', {
    init: function () {
      this.el.addEventListener('click', function (event) {
        document.getElementById("load_movie").pause();
      });
    }
  });

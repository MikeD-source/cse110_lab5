// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  var canvas = document.getElementById('html');
  const jsConfetti = new JSConfetti({ canvas });
  var button = document.querySelector('button');
  var sound = document.querySelector('audio');
  var slider = document.querySelector("#volume\\-controls input[type='range']");
  var sould_level = slider.value;
  play_sound_and_img();
  change_sound();
  
  

  // this block changes sound and image
  function play_sound_and_img() {
    let sound_type = "";
    let selectElement = document.querySelector('#horn\\-select');
    let img = document.querySelector('img');
    selectElement.addEventListener('change', event => {
      sound_type = event.target.value;
      if (sound_type == "air-horn") {
        img.src = "assets/images/air-horn.svg"
        img.alt = null;
      }
  
      if (sound_type == "party-horn") {
        img.src = "assets/images/party-horn.svg"
        img.alt = null;
      }
  
      if (sound_type == "car-horn") {
        img.src = "assets/images/car-horn.svg"
        img.alt = null;
      }
    });
    
    
    button.addEventListener('click', event => {
      if (sound_type == "air-horn") {
        sound.src = 'assets/audio/air-horn.mp3';
        updateVolume(sould_level);
        sound.play();
   
      }
  
      if (sound_type == "car-horn") {
        sound.src = 'assets/audio/car-horn.mp3';
        updateVolume(sould_level);
        sound.play();
   
      }
  
      if (sound_type == "party-horn") {
        
        jsConfetti.addConfetti();
        sound.src = 'assets/audio/party-horn.mp3';
        updateVolume(sould_level);
        sound.play();
  
      }
    });
  }
    function change_sound() {
      slider.oninput = function() {
        sould_level = this.value;
      }  
      
      setInterval(function() {volumeIconLevel(sould_level)});

    }
  
    function volumeIconLevel(volVal) {
      let volImg = document.querySelector("#volume\\-controls img");
      if (volVal >= 67) {
        volImg.src = "assets/icons/volume-level-3.svg"
      } else if (volVal <= 66 && volVal >= 34) {
        volImg.src = "assets/icons/volume-level-2.svg"
      } else if (volVal <= 33 && volVal >= 1) {
        volImg.src = "assets/icons/volume-level-1.svg"
      } else {
        volImg.src = "assets/icons/volume-level-0.svg"
      }
    }

    function updateVolume(volVal) {
      sound.volume = volVal / 100;
    }
      
  
}


  

  


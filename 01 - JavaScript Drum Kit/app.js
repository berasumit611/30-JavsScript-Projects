// "use strict";
// key code dot info

window.addEventListener('keydown',(e)=>{

    // console.log(e); 
    /*i click a o/p--isTrusted
    "a"
    keyCode
    : 
    65*/
    
   const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);//<audio data-key="65" src="sounds/clap.wav"></audio>
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(key);
    if(!audio) return; //if no audio element stop function

    /*The play() method starts playing the current audio or video.

Tip: Use the pause() method to pause the current audio/video.*/

/*The currentTime property sets or returns the current position (in seconds) of the audio/video playback.*/
    key.classList.add('playing');
    audio.currentTime=0;
    audio.play();
    
});

function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== 'transform') return;
     e.target.classList.remove('playing');
  }
const keys =document.querySelectorAll('.key');
// console.log(keys);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
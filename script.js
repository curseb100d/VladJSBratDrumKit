function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.bratkey[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //I just want to rewind to the start;
    audio.play(); //Play the keyboard sound
    key.classList.add('bratplaying');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('bratplaying');
}

const keys = document.querySelectorAll('.bratkey');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
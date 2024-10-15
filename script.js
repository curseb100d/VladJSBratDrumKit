function playSound(e){
    // Find the audio element that matches the key pressed (by checking the 'data-key' attribute).
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Find the corresponding div element with the class 'bratkey' that matches the key pressed.
    const bratkey = document.querySelector(`.bratkey[data-key="${e.keyCode}"]`);
    // If no audio element is found (i.e., the key pressed doesn't match any drum sound), exit the function.
    if(!audio) return; // stop the function from running all together
    // Rewind the audio to the start so that it can be played again from the beginning.
    audio.currentTime = 0; //I just want to rewind to the start;
    // Play the audio associated with the key.
    audio.play(); //Play the keyboard sound
    // Add the 'bratplaying' class to the corresponding key's div to apply the visual effect.
    bratkey.classList.add('bratplaying');
}

function removeTransition(e) {
    // Only proceed if the property that has transitioned is 'transform' (to avoid unnecessary calls for other transitions).
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    // 'this' refers to the element that received the event. Remove the 'bratplaying' class to remove the visual effect.
    this.classList.remove('bratplaying');
}

// Select all elements with the class 'bratkey' (the drum keys).
const bratkeys = document.querySelectorAll('.bratkey');
// For each bratkey, listen for the 'transitionend' event, which occurs when a CSS transition finishes. 
// When it does, call the 'removeTransition' function to remove the visual effect.
bratkeys.forEach(bratkey => bratkey.addEventListener('transitionend', removeTransition));
// Listen for the 'keydown' event on the whole window. When a key is pressed, call the 'playSound' function.
window.addEventListener('keydown', playSound);
var audio = new Audio(chrome.runtime.getURL("asset/ba-dum-tss.ogg"));
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 118) {
    audio.play();
    console.log('play!');
  }
}, false);

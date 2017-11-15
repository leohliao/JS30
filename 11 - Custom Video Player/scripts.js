/* Step 01 - Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');

/* Step 02 - Build Out Functions */
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Step 03 - Hook up the event listener */
player.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
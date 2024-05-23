const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

  const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
   console.log(muteUnmuteButton);

  const muteUnmuteImg = document.querySelector('mute-unmute-img');
  console.log(muteUnmuteImg);

muteUnmuteButton.addEventListener('click', toggleSound);

function toggleSound() {

  if (video.muted) {
      video.muted = false;
      muteUnmuteButton.textContent = 'Mute';
      muteUnmuteButton.style.backgroundColor = "#d5cea3";
      video.muted = false;
  } else {
      video.muted = true;
      muteUnmuteButton.textContent = 'Unmute';
      muteUnmuteButton.style.backgroundColor = "#7b775e";
      video.muted = true;
  }
}

const loopButton = document.querySelector("#loop-btn");
console.log(loopButton);

const loopImg = document.querySelector('loop-img');
console.log(loopImg);

loopButton.addEventListener("click", loopVideo);
// looping video option !
function loopVideo() {
  if (video.looped) {
    video.currentTime = 0;
    video.play();
  }
function loopVideo() {
  if (loop) {
    loop = false;
    loopButton.textContent = 'Unloop';
    loopButton.style.backgroundColor = "#d5cea3";
  } else {
    loop = true;
    loopButton.textContent = 'Loop'
    loopButton.style.backgroundColor = "#7b775e";
  }
  console.log("loop is", loop);
}
}

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
console.log(decreaseVolumeButton);

const decreaseVolumeImg = document.querySelector('decrease-volume-img')
console.log (decreaseVolumeImg)

decreaseVolumeButton.addEventListener("click", decreaseVolume);

function updateVolume() {
  const volume = video.volume;
  console.log("Volume changed:", volume);
}
  function decreaseVolume() {
    if (video.volume > 0.11) 
      video.volume -= 0.1;
    }

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
console.log(increaseVolumeButton);

const increaseVolumeImg = document.querySelector('increase-volume-img')
console.log (increaseVolumeImg)

increaseVolumeButton.addEventListener("click", increaseVolume);

function updateVolume() {
  const volume = video.volume;
  console.log("Volume changed:", volume);
}x
function increaseVolume() {
  if (video.volume < 0.9) {
    video.volume += 0.1;
  }
}



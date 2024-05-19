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

function toggleMute() {
  const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
  const muteUnmuteImg = document.querySelector('mute-unmute-img');

  if (myVideo.muted) {
      myVideo.muted = false;
      muteUnmuteButton.textContent = 'Mute';
  } else {
      myVideo.muted = true;
      muteUnmuteButton.textContent = 'Unmute';
  }
}

// Adding event listener to the mute button
document.addEventListener('DOMContentLoaded', function() {
  const muteUnmuteButton = document.getElementById('muteButton');
  muteUnmuteButton.addEventListener('click', toggleMute);
});

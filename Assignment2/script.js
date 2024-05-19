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
      muteUnmuteButton.style.backgroundColor = "#d5cea3";
  } else {
      myVideo.muted = true;
      muteUnmuteButton.textContent = 'Unmute';
      muteUnmuteButton.style.backgroundColor = "#7b775e";
  }
}
const increaseVolumeButton = document.querySelector("#increase-volume-btn");
// Event listener to increase volume on clicking the button
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
// Event listener to decrease volume on clicking the button
decreaseVolumeButton.addEventListener("click", decreaseVolume);

const loopButton = document.querySelector("#loop-btn");
// Event listener to loop or replay the video on clicking the button
loopButton.addEventListener("click", loopVideo);

// Adding event listener to the mute button
  const muteUnmuteButton = document.getElementById('muteUnmuteButton');
  muteUnmuteButton.addEventListener('click', toggleMute);

  function replay() {
    console.log("loop is", loop);
    if (loop) {
      myVideo.currentTime = 0;
      myVideo.play();
    }
  }
  
  //this function will set the value of loop to true or false
  function loopVideo() {
    if (loop) {
      loop = false;
      loopButton.style.backgroundColor = "#d5cea3";
    } else {
      loop = true;
      loopButton.style.backgroundColor = "#7b775e";
    }
    console.log("loop is", loop);
  }
  function updateVolume() {
    const volume = myVideo.volume;
    console.log("Volume changed:", volume);
  }
  
  //volume values range from 0 to 1 with an increment of 0.1
  function increaseVolume() {
    if (myVideo.volume < 0.9) {
      myVideo.volume += 0.1;
    }
  }
  
  //since you do not want the value to go to negative the check is not at 0 but 0.11
  function decreaseVolume() {
    if (myVideo.volume > 0.11) {
      myVideo.volume -= 0.1;
    }
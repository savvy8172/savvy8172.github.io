const airportAudio = document. querySelector("#airport-audio");
console.log(airportAudio);

//airportAudio.play();
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);

function playAirportAudio (){
    airportAudio.play();

}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener ("click", pauseAirportAudio);

function pauseAirportAudio() {
    airportAudio.pause();
}

const popButton = document.querySelector("#pop-button");
console.log(popButton);

const popSound = document.querySelector("#pop-sound")

popButton.addEventListener ("click", popIt);

function popIt() {
    popSound.play();
}
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");

document.addEventListener("keydown", (event) => {
    if (event.which == "65") {
        boom.play();
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (event.which == "83") {
        clap.play();
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (event.which == "68") {
        hihat.play();
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (event.which == "70") {
        kick.play();
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (event.which == "72") {
        openhat.play();
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (event.which == "74") {
        ride.play();
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (event.which == "75") {
        snare.play();
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (event.which == "76") {
        tom.play();
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
})
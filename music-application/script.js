let songName = document.getElementById("1").innerText;
let songPath = "../../../assets/songs/";
let songPlaying = songPath + songName;
let mainPlayButton = document.getElementById("main-play");
let barStatus = document.getElementById("range-input");
let songIndex = 1;
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let songsList = document.getElementsByClassName("playSong");
let prev = document.getElementById("previous");
let next = document.getElementById("next");
let songPlayed = new Audio(songPlaying);
let songDetail = document.getElementById("songDetails");
songPlayed.addEventListener("timeupdate", (e) => {
  barStatus.value = parseInt(
    (songPlayed.currentTime * 100) / songPlayed.duration
  );
});
document.getElementById("songDetails").innerText = songName;
Array.from(songsList).forEach((element) => {
  console.log(element);
  element.children[0].addEventListener("click", (e) => {
    classes = e.target.classList.value.split(" ");
    songIndex = classes[1].split("-")[1];
    console.log(songIndex);
    console.log(e.target.classList);
    songName = document.getElementById(songIndex).innerText;
    songPlaying = songPath + songName;
    songPlayed.src = songPlaying;
    classes = mainPlayButton.classList.value.split(" ");
    if (classes.includes("fa-play-circle")) {
      mainPlayButton.classList.remove("fa-play-circle");
      mainPlayButton.classList.add("fa-pause-circle");
    }
    songDetail.innerText = songName;
    songPlayed.play();
    barStatus.value = 0;
  });
});

barStatus.addEventListener("change", (e) => {
  songPlayed.currentTime = (e.target.value * songPlayed.duration) / 100;
  classes = mainPlayButton.classList.value.split(" ");
  if (classes.includes("fa-pause-circle")) {
    songPlayed.play();
  } else {
    songPlayed.pause();
  }
});

mainPlayButton.addEventListener("click", (e) => {
  classes = mainPlayButton.classList.value.split(" ");
  if (classes.includes("fa-pause-circle")) {
    console.log("inside play to pause function");
    mainPlayButton.classList.remove("fa-pause-circle");
    mainPlayButton.classList.add("fa-play-circle");
    songPlayed.pause();
  } else {
    console.log("inside pause to play function");
    mainPlayButton.classList.remove("fa-play-circle");
    mainPlayButton.classList.add("fa-pause-circle");
    songPlayed.play();
    barStatus.value = parseInt(
      (songPlayed.currentTime * 100) / songPlayed.duration
    );
  }
});

prev.addEventListener("click", (e) => {
  if (songIndex == 1) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  songName = document.getElementById(songIndex).innerText;
  songPlaying = songPath + songName;
  songPlayed.src = songPlaying;
  classes = mainPlayButton.classList.value.split(" ");
  if (classes.includes("fa-pause-circle")) {
    songPlayed.play();
  } else {
    songPlayed.pause();
  }
  songDetail.innerText = songName;
  barStatus.value = 0;
});
next.addEventListener("click", (e) => {
  if (songIndex == 9) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  songName = document.getElementById(songIndex).innerText;
  songPlaying = songPath + songName;
  songPlayed.src = songPlaying;
  classes = mainPlayButton.classList.value.split(" ");
  if (classes.includes("fa-pause-circle")) {
    songPlayed.play();
  } else {
    songPlayed.pause();
  }
  songDetail.innerText = songName;
  barStatus.value = 0;
});

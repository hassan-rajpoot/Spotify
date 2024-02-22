let mysong = new Audio("songs/1.mp3");
let masterplaybtn = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let progressbar = document.getElementById("myProgressBar");
let firstsong = document.getElementById("firstsong");
let songitems = Array.from(document.getElementsByClassName("songItem"));
// console.log(songitems);
let songindex = 0;

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];
songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterplaybtn.addEventListener("click", () => {
  if (mysong.paused || mysong.currentTime <= 0) {
    mysong.play();
    masterplaybtn.classList.remove("fa-play-circle");
    masterplaybtn.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    firstsong.style.animation = "rotate-animation 10s infinite linear";
    // masterplaybtn.style.color = 'red';
  } else {
    mysong.pause();
    masterplaybtn.classList.add("fa-play-circle");
    masterplaybtn.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
    firstsong.style.animation = "rotate-animation";
  }
});

mysong.addEventListener("timeupdate", () => {
  progress = parseInt((mysong.currentTime / mysong.duration) * 100);
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  mysong.currentTime = (progressbar.value * mysong.duration) / 100;
});

function getSong(songind) {
  //   console.log(songind);

//   mysong.pause();
//   mysong = new Audio(songs[songind].filePath);
//   mysong.currentTime = 0;
//   mysong.play();
}

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songindex = parseInt(e.target.id - 1);
      mysong.pause();
      mysong = new Audio(songs[songindex].filePath);
      mysong.play();
      e.target.classList.add("fa-pause-circle");
      e.target.classList.remove("fa-play-circle");
      masterplaybtn.classList.remove("fa-play-circle");
      masterplaybtn.classList.add("fa-pause-circle");
    });
  }
);

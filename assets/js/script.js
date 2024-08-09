'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./images/Aku, Kamu Dan Samudra.jpg",
    posterUrl: "./images/Aku, Kamu Dan Samudra.jpg",
    title: "Aku, Kamu Dan Samudra",
    album: "Partai Anarki",
    year: 2019,
    artist: "Rebellion Rose",
    musicPath: "Aku, Kamu Dan Samudra.mp3",
  },
  {
    backgroundImage: "./images/Berita Kepada Kawan.jpg",
    posterUrl: "./images/Berita Kepada Kawan.jpg",
    title: "Berita Kepada Kawan",
    album: "Masih Ada Waktu",
    year: 2008,
    artist: "Ebiet G. Ade",
    musicPath: "Berita Kepada Kawan.mp3",
  },
  {
    backgroundImage: "./images/Bung Hatta.jpg",
    posterUrl: "./images/Bung Hatta.jpg",
    title: "Bung Hatta",
    album: "Country",
    year: 1980,
    artist: "Iwan Fals",
    musicPath: "Bung Hatta.mp3",
  },
  {
    backgroundImage: "./images/Can't Catch Me.jpg",
    posterUrl: "./images/Can't Catch Me.jpg",
    title: "Can't Catch Me",
    album: "Stories",
    year: 2015,
    artist: "Avicii",
    musicPath: "Can't Catch Me.mp3",
  },
  {
    backgroundImage: "./images/Dear God.jpg",
    posterUrl: "./images/Dear God.jpg",
    title: "Dear God",
    album: "Avenged Sevenfold",
    year: 2007,
    artist: "Avenged Sevenfold",
    musicPath: "Dear God.mp3",
  },
  {
    backgroundImage: "./images/Demons.jpg",
    posterUrl: "./images/Demons.jpg",
    title: "Demons",
    album: "Night Visions",
    year: 2012,
    artist: "Imagine Dragons, Saturday Mix Dj",
    musicPath: "Demons.mp3",
  },
  {
    backgroundImage: "./images/Do'a pengobral dosa.jpg",
    posterUrl: "./images/Do'a pengobral dosa.jpg",
    title: "Do'a pengobral dosa",
    album: "Sarjana Muda",
    year: 1990,
    artist: "Iwan Fals",
    musicPath: "Do'a pengobral dosa.mp3",
  },
  {
    backgroundImage: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    posterUrl: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    title: "Dusk Till Dawn (feat. Sia) - Radio Edit",
    album: "Dusk Till Dawn (feat. Sia) - Radio Edit",
    year: 2017,
    artist: "ZAYN, Sia",
    musicPath: "Dusk Till Dawn (feat. Sia) - Radio Edit.mp3",
  },
  {
    backgroundImage: "./images/Faded.jpg",
    posterUrl: "./images/Faded.jpg",
    title: "Faded - Instrumental",
    album: "Faded",
    year: 2015,
    artist: "Alan Walker",
    musicPath: "Faded - Instrumental.mp3",
  },
  {
    backgroundImage: "./images/Genit.jpg",
    posterUrl: "./images/Genit.jpg",
    title: "Genit",
    album: "SKA Phobia",
    year: 1999,
    artist: "Tipe-X",
    musicPath: "Genit.mp3",
  },
  {
    backgroundImage: "./images/Hari Bersamanya.jpg",
    posterUrl: "./images/Hari Bersamanya.jpg",
    title: "Hari Bersamanya",
    album: "Berlayar",
    year: 2011,
    artist: "Sheila On 7",
    musicPath: "Hari Bersamanya.mp3",
  },
  {
    backgroundImage: "./images/High On Life (feat. Bonn).jpg",
    posterUrl: "./images/High On Life (feat. Bonn).jpg",
    title: "High On Life (feat. Bonn)",
    album: "High On Life (feat. Bonn)",
    year: 2018,
    artist: "Martin Garrix, Bonn",
    musicPath: "High On Life (feat. Bonn).mp3",
  },
  {
    backgroundImage: "./images/I'm Yours.jpg",
    posterUrl: "./images/I'm Yours.jpg",
    title: "I'm Yours",
    album: "We Sing. We Dance. We Steal Things.",
    year: 2008,
    artist: "Jason Mraz",
    musicPath: "I'm Yours.mp3",
  },
  {
    backgroundImage: "./images/It's You.jpg",
    posterUrl: "./images/It's You.jpg",
    title: "It's You",
    album: "YOU",
    year: 2019,
    artist: "Ali Gatie",
    musicPath: "It's You.mp3",
  },
  {
    backgroundImage: "./images/Jadilah Legenda.jpg",
    posterUrl: "./images/Jadilah Legenda.jpg",
    title: "Jadilah Legenda",
    album: "Sunset di Tanah Anarki",
    year: 2013,
    artist: "Superman Is Dead",
    musicPath: "Jadilah Legenda.mp3",
  },
  {
    backgroundImage: "./images/Kamu Cantik Kamu Baik.jpg",
    posterUrl: "./images/Kamu Cantik Kamu Baik.jpg",
    title: "Kamu Cantik Kamu Baik",
    album: "Dunia Sempurna",
    year: 2014,
    artist: "Lyla",
    musicPath: "Kamu Cantik Kamu Baik.mp3",
  },
  {
    backgroundImage: "./images/Kamu Ngga Sendirian.jpg",
    posterUrl: "./images/Kamu Ngga Sendirian.jpg",
    title: "Kamu Ngga Sendirian",
    album: "Discography Hitam Putih",
    year: 2005,
    artist: "Tipe-X",
    musicPath: "Kamu Ngga Sendirian.mp3",
  },
  {
    backgroundImage: "./images/Kembali Berdansa.jpg",
    posterUrl: "./images/Kembali Berdansa.jpg",
    title: "Kembali Berdansa",
    album: "Kembali Berdansa",
    year: 2006,
    artist: "Shaggydog",
    musicPath: "Kembali Berdansa.mp3",
  },
  {
    backgroundImage: "./images/Kenangan Manis.jpg",
    posterUrl: "./images/Kenangan Manis.jpg",
    title: "Kenangan Manis",
    album: "Walk The Talk",
    year: 2018,
    artist: "Pamungkas",
    musicPath: "Kenangan Manis.mp3",
  },
  {
    backgroundImage: "./images/Kumenanti Seorang Kekasih.jpg",
    posterUrl: "./images/Kumenanti Seorang Kekasih.jpg",
    title: "Kumenanti Seorang Kekasih",
    album: "In Love",
    year: 2005,
    artist: "Iwan Fals",
    musicPath: "Kumenanti Seorang Kekasih.mp3",
  },
  {
    backgroundImage: "./images/Lebih Dari Bintang.jpg",
    posterUrl: "./images/Lebih Dari Bintang.jpg",
    title: "Lebih Dari Bintang",
    album: "Lebih Dari Bintang",
    year: 2013,
    artist: "Lyla",
    musicPath: "Lebih Dari Bintang.mp3",
  },
  {
    backgroundImage: "./images/Lebih Indah.jpg",
    posterUrl: "./images/Lebih Indah.jpg",
    title: "Lebih Indah",
    album: "Lebih Indah",
    year: 2016,
    artist: "Adera",
    musicPath: "Lebih Indah.mp3",
  },
  {
    backgroundImage: "./images/Love Lights.jpg",
    posterUrl: "./images/Love Lights.jpg",
    title: "Love Lights",
    album: "Love Lights",
    year: 2018,
    artist: "Sunset Sons",
    musicPath: "Love Lights.mp3",
  },
  {
    backgroundImage: "./images/Magic.jpg",
    posterUrl: "./images/Magic.jpg",
    title: "Magic",
    album: "Lebih Dari Bintang",
    year: 2013,
    artist: "Lyla",
    musicPath: "Magic.mp3",
  },
  {
    backgroundImage: "./images/Mawar Hitam.jpg",
    posterUrl: "./images/Mawar Hitam.jpg",
    title: "Mawar Hitam",
    album: "Discography Hitam Putih",
    year: 2005,
    artist: "Tipe-X",
    musicPath: "Mawar Hitam.mp3",
  },
  {
    backgroundImage: "./images/My Love.jpg",
    posterUrl: "./images/My Love.jpg",
    title: "My Love",
    album: "Coast To Coast (Expanded Edition)",
    year: 2000,
    artist: "Westlife",
    musicPath: "My Love.mp3",
  },
  {
    backgroundImage: "./images/Night Changes.jpg",
    posterUrl: "./images/Night Changes.jpg",
    title: "Night Changes",
    album: "FOUR (Deluxe)",
    year: 2014,
    artist: "One Direction",
    musicPath: "Night Changes.mp3",
  },
  {
    backgroundImage: "./images/Numb.jpg",
    posterUrl: "./images/Numb.jpg",
    title: "Numb",
    album: "Meteora",
    year: 2003,
    artist: "Linkin Park",
    musicPath: "Numb.mp3",
  },
  {
    backgroundImage: "./images/Payphone.jpg",
    posterUrl: "./images/Payphone.jpg",
    title: "Payphone",
    album: "Overexposed Track By Track",
    year: 2012,
    artist: "Maroon 5, Wiz Khalifa",
    musicPath: "Payphone.mp3",
  },
  {
    backgroundImage: "./images/Perfect.jpg",
    posterUrl: "./images/Perfect.jpg",
    title: "Perfect",
    album: "÷ (Deluxe)",
    year: 2017,
    artist: "Ed Sheeran",
    musicPath: "Perfect.mp3",
  },
  {
    backgroundImage: "./images/R.I.P (Rhyme In Peace).jpg",
    posterUrl: "./images/R.I.P (Rhyme In Peace).jpg",
    title: "R.I.P (Rhyme In Peace)",
    album: "Unity",
    year: 2007,
    artist: "Bondan Prakoso",
    musicPath: "R.I.P (Rhyme In Peace).mp3",
  },
  {
    backgroundImage: "./images/Safe and Sound.jpg",
    posterUrl: "./images/Safe and Sound.jpg",
    title: "Safe and Sound",
    album: "Courage to Grow",
    year: 2007,
    artist: "Rebelution",
    musicPath: "Safe and Sound.mp3",
  },
  {
    backgroundImage: "./images/Salam Rindu.jpg",
    posterUrl: "./images/Salam Rindu.jpg",
    title: "Salam Rindu",
    album: "Mereka Tak Pernah Mengerti",
    year: 2001,
    artist: "Tipe-X",
    musicPath: "Salam Rindu.mp3",
  },
  {
    backgroundImage: "./images/See You Again (feat. Charlie Puth).jpg",
    posterUrl: "./images/See You Again (feat. Charlie Puth).jpg",
    title: "See You Again (feat. Charlie Puth)",
    album: "See You Again (feat. Charlie Puth)",
    year: 2015,
    artist: "Wiz Khalifa & Charlie Puth",
    musicPath: "See You Again (feat. Charlie Puth).mp3",
  },
  {
    backgroundImage: "./images/Something Just Like This.jpg",
    posterUrl: "./images/Something Just Like This.jpg",
    title: "Something Just Like This",
    album: "Something Just Like This",
    year: 2017,
    artist: "The Chainsmokers, Coldplay",
    musicPath: "Something Just Like This.mp3",
  },
  {
    backgroundImage: "./images/Sore Tugu Pancoran.jpg",
    posterUrl: "./images/Sore Tugu Pancoran.jpg",
    title: "Sore Tugu Pancoran",
    album: "Sore Tugu Pancoran",
    year: 1985,
    artist: "Iwan Fals",
    musicPath: "Sore Tugu Pancoran.mp3",
  },
  {
    backgroundImage: "./images/Steal My Girl.jpg",
    posterUrl: "./images/Steal My Girl.jpg",
    title: "Steal My Girl",
    album: "FOUR (Deluxe)",
    year: 2014,
    artist: "One Direction",
    musicPath: "Steal My Girl.mp3",
  },
  {
    backgroundImage: "./images/Stereo Hearts (feat. Adam Levine).jpg",
    posterUrl: "./images/Stereo Hearts (feat. Adam Levine).jpg",
    title: "Stereo Hearts (feat. Adam Levine)",
    album: "The Papercut Chronicles ⅠⅠ",
    year: 2011,
    artist: "Gym Class Heroes",
    musicPath: "Stereo Hearts (feat. Adam Levine).mp3",
  },
  {
    backgroundImage: "./images/Sunset Di Tanah Anarki.jpg",
    posterUrl: "./images/Sunset Di Tanah Anarki.jpg",
    title: "Sunset Di Tanah Anarki",
    album: "Sunset di Tanah Anarki",
    year: 2013,
    artist: "Superman Is Dead",
    musicPath: "Sunset Di Tanah Anarki.mp3",
  },
  {
    backgroundImage: "./images/Symphony (feat. Zara Larsson).jpg",
    posterUrl: "./images/Symphony (feat. Zara Larsson).jpg",
    title: "Symphony (feat. Zara Larsson)",
    album: "Symphony (feat. Zara Larsson)",
    year: 2017,
    artist: "Cleand Bandit, Zara Larsson",
    musicPath: "Symphony (feat. Zara Larsson).mp3",
  },
  {
    backgroundImage: "./images/Tak Selalu.jpg",
    posterUrl: "./images/Tak Selalu.jpg",
    title: "Tak Selalu",
    album: "Mestakung",
    year: 2014,
    artist: "Souljah",
    musicPath: "Tak Selalu.mp3",
  },
  {
    backgroundImage: "./images/The Lazy Song.jpg",
    posterUrl: "./images/The Lazy Song.jpg",
    title: "The Lazy Song",
    album: "Doo-Wops & Hooligans",
    year: 2010,
    artist: "Bruno Mars",
    musicPath: "The Lazy Song.mp3",
  },
  {
    backgroundImage: "./images/Tombo Ati.jpg",
    posterUrl: "./images/Tombo Ati.jpg",
    title: "Tombo Ati",
    album: "Istighfar",
    year: 2005,
    artist: "Opick",
    musicPath: "Tombo Ati.mp3",
  },
  {
    backgroundImage: "./images/Ujung Aspal Pondok Gede.jpg",
    posterUrl: "./images/Ujung Aspal Pondok Gede.jpg",
    title: "Ujung Aspal Pondok Gede",
    album: "Sore Tugu Pancoran",
    year: 1985,
    artist: "Iwan Fals",
    musicPath: "Ujung Aspal Pondok Gede.mp3",
  },
  {
    backgroundImage: "./images/Wake Me up When September Ends.jpg",
    posterUrl: "./images/Wake Me up When September Ends.jpg",
    title: "Wake Me up When September Ends",
    album: "American Idiot",
    year: 2004,
    artist: "Green Day",
    musicPath: "Wake Me up When September Ends.mp3",
  },
  {
    backgroundImage: "./images/Way Back Home.jpg",
    posterUrl: "./images/Way Back Home.jpg",
    title: "Way Back Home",
    album: "Take",
    year: 2018,
    artist: "SHAUN",
    musicPath: "Way Back Home.mp3",
  },
  {
    backgroundImage: "./images/Wish You Were Here.jpg",
    posterUrl: "./images/Wish You Were Here.jpg",
    title: "Wish You Were Here",
    album: "The Peace And The Panic",
    year: 2017,
    artist: "Neck Deep",
    musicPath: "Wish You Were Here.mp3",
  },
  {
    backgroundImage: "./images/Yang Terlupakann.jpg",
    posterUrl: "./images/Yang Terlupakan.jpg",
    title: "Yang Terlupakan",
    album: "Sarjana Muda",
    year: 1981,
    artist: "Iwan Fals",
    musicPath: "Yang Terlupakan.mp3",
  },
  {
    backgroundImage: "./images/You Are The Reason.jpg",
    posterUrl: "./images/You Are The Reason.jpg",
    title: "You Are The Reason",
    album: "Only Human (Deluxe)",
    year: 2018,
    artist: "Calum Scott",
    musicPath: "You Are The Reason.mp3",
  },
  {
  backgroundImage: "./images/너 같은 사람 또 없어 No Other.jpg",
    posterUrl: "./images/너 같은 사람 또 없어 No Other.jpg",
    title: "너 같은 사람 또 없어 No Other",
    album: "미인아 (Bonamana) - The 4th Album Repackage",
    year: 2010,
    artist: "SUPER JUNIOR",
    musicPath: "너 같은 사람 또 없어 No Other.mp3",
  },
];


/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}


/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);


/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});


/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);


/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}


/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);


/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);


/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}


/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);


/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);


/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);


/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);


/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
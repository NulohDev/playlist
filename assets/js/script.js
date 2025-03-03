'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./images/Allahi Allah Kiya Karo.jpg",
    posterUrl: "./images/Allahi Allah Kiya Karo.jpg",
    title: "Allahi Allah Kiya Karo",
    album: "Thank You Allah",
    year: 2016,
    artist: "Maher Zain, Irfan Makki",
    musicPath: "Allahi Allah Kiya Karo.mp3",
  },
  {
    backgroundImage: "./images/Anta Syamsun Anta Badrun Cover.jpg",
    posterUrl: "./images/Anta Syamsun Anta Badrun Cover.jpg",
    title: "Anta Syamsun Anta Badrun Cover",
    album: "Sholawat Badar",
    year: 2024,
    artist: "Muhajar Octaviananda, Muhajir Lamkaruna, Saiful Rizal",
    musicPath: "Anta Syamsun Anta Badrun Cover.mp3",
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
    backgroundImage: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    posterUrl: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    title: "Dusk Till Dawn (feat. Sia) - Radio Edit",
    album: "Dusk Till Dawn (feat. Sia) - [Radio Edit]",
    year: 2017,
    artist: "ZAYN, Sia",
    musicPath: "Dusk Till Dawn (feat. Sia) - Radio Edit.mp3",
  },
  {
    backgroundImage: "./images/Faded - Instrumental.jpg",
    posterUrl: "./images/Faded - Instrumental.jpg",
    title: "Faded - Instrumental",
    album: "Faded",
    year: 2015,
    artist: "Alan Walker",
    musicPath: "Faded - Instrumental.mp3",
  },
  {
    backgroundImage: "./images/Ga Romantis.jpg",
    posterUrl: "./images/Ga Romantis.jpg",
    title: "Ga Romantis",
    album: "Ga Romantis",
    year: 2015,
    artist: "Lyla",
    musicPath: "Ga Romantis.mp3",
  },
  {
    backgroundImage: "./images/Hadal Ahbek.jpg",
    posterUrl: "./images/Hadal Ahbek.jpg",
    title: "Hadal Ahbek",
    album: "BAREE?",
    year: 2021,
    artist: "Issam Alnajjr",
    musicPath: "Hadal Ahbek.mp3",
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
    backgroundImage: "./images/Kamu Ngga' Sendirian.jpg",
    posterUrl: "./images/Kamu Ngga' Sendirian.jpg",
    title: "Kamu Ngga' Sendirian",
    album: "Discography Hitam Putih",
    year: 2005,
    artist: "Tipe-X",
    musicPath: "Kamu Ngga' Sendirian.mp3",
  },
  {
    backgroundImage: "./images/Kau Auraku.jpg",
    posterUrl: "./images/Kau Auraku.jpg",
    title: "Kau Auraku",
    album: "Heaven Of Love",
    year: 2004,
    artist: "Ada Band",
    musicPath: "Kau Auraku.mp3",
  },
  {
    backgroundImage: "./images/Kemesraan.jpg",
    posterUrl: "./images/Kemesraan.jpg",
    title: "Kemesraan",
    album: "15 Hit's No.1",
    year: 2005,
    artist: "Etrie Jayanthie, Jamal Mirdad, Rafika Duri, Iwan Fals, Itang Yunasz, Betharia Sonata, Nani Sugianto, Chrisye",
    musicPath: "Kemesraan.mp3",
  },
  {
    backgroundImage: "./images/Kroncong Protol.jpg",
    posterUrl: "./images/Kroncong Protol.jpg",
    title: "Kroncong Protol",
    album: "Unity",
    year: 2007,
    artist: "Bondan Prakoso, Fade2Black",
    musicPath: "Kroncong Protol.mp3",
  },
  {
    backgroundImage: "./images/Kumenanti Seorang Kekasih.jpg",
    posterUrl: "./images/Kumenanti Seorang Kekasih.jpg",
    title: "Kumenanti Seorang Kekasih",
    album: "Barang Antik",
    year: 1998,
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
    backgroundImage: "./images/Rahmatun Lil’Alameen.jpg",
    posterUrl: "./images/Rahmatun Lil’Alameen.jpg",
    title: "Rahmatun Lil’Alameen",
    album: "Rahmatun Lil’Alameen",
    year: 2022,
    artist: "Maher Zain",
    musicPath: "Rahmatun Lil’Alameen.mp3",
  },
  {
    backgroundImage: "./images/Rasool' Allah.jpg",
    posterUrl: "./images/Rasool' Allah.jpg",
    title: "Rasool' Allah",
    album: "Salam",
    year: 2015,
    artist: "Harris J.",
    musicPath: "Rasool' Allah.mp3",
  },
  {
    backgroundImage: "./images/Rindu Muhammadku.jpg",
    posterUrl: "./images/Rindu Muhammadku.jpg",
    title: "Rindu Muhammadku",
    album: "Muhammad Nabiku",
    year: 2010,
    artist: "Haddad Alwi, Vita, Ebith",
    musicPath: "Rindu Muhammadku.mp3",
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
    backgroundImage: "./images/Salam Alaikum.jpg",
    posterUrl: "./images/Salam Alaikum.jpg",
    title: "Salam Alaikum",
    album: "Salam",
    year: 2015,
    artist: "Harris J.",
    musicPath: "Salam Alaikum.mp3",
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
    backgroundImage: "./images/Sholawat Badar (feat. Saiful Rizal) Cover.jpg",
    posterUrl: "./images/Sholawat Badar (feat. Saiful Rizal) Cover.jpg",
    title: "Sholawat Badar (feat. Saiful Rizal) Cover",
    album: "Sholawat Badar",
    year: 2024,
    artist: "Muhajir Lamkaruna, Saiful Rizal",
    musicPath: "Sholawat Badar (feat. Saiful Rizal) Cover.mp3",
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
    backgroundImage: "./images/Stand Here and Wait.jpg",
    posterUrl: "./images/Stand Here and Wait.jpg",
    title: "Stand Here and Wait",
    album: "Morocco in My Head",
    year: 2021,
    artist: "Fantoms",
    musicPath: "Stand Here and Wait.mp3",
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
    artist: "Gym Class Heroes, Adam Levine",
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
    artist: "Clean Bandit, Zara Larsson",
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
    backgroundImage: "./images/To the Bone.jpg",
    posterUrl: "./images/To the Bone.jpg",
    title: "To the Bone",
    album: "Flying Solo",
    year: 2019,
    artist: "Pamungkas",
    musicPath: "To the Bone.mp3",
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
    backgroundImage: "./images/Wavin' Flag - Coca-Cola® Celebration Mix.jpg",
    posterUrl: "./images/Wavin' Flag - Coca-Cola® Celebration Mix.jpg",
    title: "Wavin' Flag - Coca-Cola® Celebration Mix",
    album: "Wavin' Flag (International Version Coca-Cola® Celebration Mix",
    year: 2010,
    artist: "K'NAAN",
    musicPath: "Wavin' Flag - Coca-Cola® Celebration Mix.mp3",
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
    backgroundImage: "./images/Yang Terlupakan.jpg",
    posterUrl: "./images/Yang Terlupakan.jpg",
    title: "Yang Terlupakan",
    album: "Sarjana Muda",
    year: 1990,
    artist: "Iwan Fals",
    musicPath: "Yang Terlupakan.mp3",
  },
  {
    backgroundImage: "./images/You Got.jpg",
    posterUrl: "./images/You Got.jpg",
    title: "You Got",
    album: "You Got",
    year: 2021,
    artist: "BEKA",
    musicPath: "You Got.mp3",
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
'use strict';



/**
 * all music information
 */

const musicData = [

  {
    backgroundImage: "./images/Alasanmu.jpg",
    posterUrl: "./images/Alasanmu.jpg",
    title: "Alasanmu",
    album: "Diammu Gunung Berapi",
    genre: "Pop Rock",
    artist: "Exists",
    musicPath: "./Alasanmu.mp3",
  },
  {  
    backgroundImage: "./images/AlHijratu.jpg",
    posterUrl: "./images/AlHijratu.jpg",
    title: "AlHijratu",
    album: "Best Nasheeds Collection",
    genre: "Islamic",
    artist: "Mohamed Youssef",
    musicPath: "./AlHijratu.mp3",
  },
  {
    backgroundImage: "./images/Allahi Allah Kiya Karo.jpg",
    posterUrl: "./images/Allahi Allah Kiya Karo.jpg",
    title: "Allahi Allah Kiya Karo",
    album: "Thank You Allah",
    genre: "Islamic",
    artist: "Maher Zain, Irfan Makki",
    musicPath: "./Allahi Allah Kiya Karo.mp3",
  },
  {
    backgroundImage: "./images/blue.jpg",
    posterUrl: "./images/blue.jpg",
    title: "blue",
    album: "blue",
    genre: "Pop",
    artist: "yung kai",
    musicPath: "./blue.mp3",
  },
    {
    backgroundImage: "./images/Buka Semangat Baru.jpg",
    posterUrl: "./images/Buka Semangat Baru.jpg",
    title: "Buka Semangat Baru",
    album: "Kamu, Aku, Cinta",
    genre: "Indonesian Pop",
    artist: "Marcello Tahitoe, Barry, Ipank, Lala Karmela",
    musicPath: "./Buka Semangat Baru.mp3",
  },
  {
    backgroundImage: "./images/Can't Catch Me - Instrumental.jpg",
    posterUrl: "./images/Can't Catch Me - Instrumental.jpg",
    title: "Can't Catch Me - Instrumental",
    album: "Stories",
    genre: "EDM",
    artist: "Avicii",
    musicPath: "./Can't Catch Me - Instrumental.mp3",
  },
  {
    backgroundImage: "./images/Cinta Itu Buta.jpg",
    posterUrl: "./images/Cinta Itu Buta.jpg",
    title: "Cinta Itu Buta",
    album: "Hal Terbesar",
    genre: "Indonesian Pop",
    artist: "Armada",
    musicPath: "./Cinta Itu Buta.mp3",
  },
  {
    backgroundImage: "./images/Dear God.jpg",
    posterUrl: "./images/Dear God.jpg",
    title: "Dear God",
    album: "Avenged Sevenfold",
    genre: "Country",
    artist: "Avenged Sevenfold",
    musicPath: "./Dear God.mp3",
  },
  {
    backgroundImage: "./images/Dengan Bismillah (Ost. Tafakur Mini Series).jpg",
    posterUrl: "./images/Dengan Bismillah (Ost. Tafakur Mini Series).jpg",
    title: "Dengan Bismillah (Ost. Tafakur Mini Series)",
    album: "Hikmah Illahi Tafakur",
    genre: "Islamic",
    artist: "Indra and Friend's",
    musicPath: "./Dengan Bismillah (Ost. Tafakur Mini Series).mp3",
  },
  {
    backgroundImage: "./images/Dengan Hati.jpg",
    posterUrl: "./images/Dengan Hati.jpg",
    title: "Dengan Hati",
    album: "Dunia Sempurna",
    genre: "Indonesian Pop",
    artist: "Lyla",
    musicPath: "./Dengan Hati.mp3",
  },
  {
    backgroundImage: "./images/Disini Dibatas Kota Ini.jpg",
    posterUrl: "./images/Disini Dibatas Kota Ini.jpg",
    title: "Disini Dibatas Kota Ini",
    album: "Dibatas Kota Ini",
    genre: "Indonesian Jazz",
    artist: "Tommy J Pisa",
    musicPath: "./Disini Dibatas Kota Ini.mp3",
  },
  {
    backgroundImage: "./images/Don't Look Back in Anger.jpg",
    posterUrl: "./images/Don't Look Back in Anger.jpg",
    title: "Don't Look Back in Anger",
    album: "(What's The Story) Morning Glory?",
    genre: "Pop Rock",
    artist: "Oasis",
    musicPath: "./Don't Look Back in Anger.mp3",
  },
  {
    backgroundImage: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    posterUrl: "./images/Dusk Till Dawn (feat. Sia) - Radio Edit.jpg",
    title: "Dusk Till Dawn (feat. Sia) - Radio Edit",
    album: "Dusk Till Dawn (feat. Sia)",
    genre: "Pop",
    artist: "ZAYN, Sia",
    musicPath: "./Dusk Till Dawn (feat. Sia) - Radio Edit.mp3",
  },
  {
    backgroundImage: "./images/Elegi Esok Pagi.jpg",
    posterUrl: "./images/Elegi Esok Pagi.jpg",
    title: "Elegi Esok Pagi",
    album: "Perjalanan (Vol. 2)",
    genre: "Indonesian Jazz",
    artist: "Ebiet G. Ade",
    musicPath: "./Elegi Esok Pagi.mp3",
  },
  {
    backgroundImage: "./images/Faded - Instrumental.jpg",
    posterUrl: "./images/Faded - Instrumental.jpg",
    title: "Faded - Instrumental",
    album: "Faded",
    genre: "EDM",
    artist: "Alan Walker", 
    musicPath: "./Faded - Instrumental.mp3",
  },
  {
    backgroundImage: "./images/Hari Bersamanya.jpg",
    posterUrl: "./images/Hari Bersamanya.jpg",
    title: "Hari Bersamanya",
    album: "Berlayar",
    genre: "Indonesian Pop",
    artist: "Sheila On 7",
    musicPath: "./Hari Bersamanya.mp3",
  },
  {
    backgroundImage: "./images/High On Life (feat. Bonn).jpg",
    posterUrl: "./images/High On Life (feat. Bonn).jpg",
    title: "High On Life (feat. Bonn)",
    album: "High On Life (feat. Bonn)",
    genre: "EDM",
    artist: "Martin Garrix, Bonn",
    musicPath: "./High On Life (feat. Bonn).mp3",
  },
  {
    backgroundImage: "./images/Hitam Putih Fotomu.jpg",
    posterUrl: "./images/Hitam Putih Fotomu.jpg",
    title: "Hitam Putih Fotomu",
    album: "Obbie Messakh",
    genre: "Indonesian Pop",
    artist: "Obbie Messakh",
    musicPath: "./Hitam Putih Fotomu.mp3",
  },
  {
    backgroundImage: "./images/I'm Yours.jpg",
    posterUrl: "./images/I'm Yours.jpg",
    title: "I'm Yours",
    album: "We Sing. We Dance. We Steal Things.",
    genre: "Reggae",
    artist: "Jason Mraz",
    musicPath: "./I'm Yours.mp3",
  },
  {
    backgroundImage: "./images/It's You.jpg",
    posterUrl: "./images/It's You.jpg",
    title: "It's You",
    album: "YOU",
    genre: "Rhythm & Blues",
    artist: "Ali Gatie",
    musicPath: "./It's You.mp3",
  },
  {
    backgroundImage: "./images/Jadilah Legenda.jpg",
    posterUrl: "./images/Jadilah Legenda.jpg",
    title: "Jadilah Legenda",
    album: "Sunset di Tanah Anarki",
    genre: "Indonesian Rock",
    artist: "Superman Is Dead",
    musicPath: "./Jadilah Legenda.mp3",
  },  
  {
    backgroundImage: "./images/Kamu Cantik Kamu Baik.jpg",
    posterUrl: "./images/Kamu Cantik Kamu Baik.jpg",
    title: "Kamu Cantik Kamu Baik",
    album: "Dunia Sempurna",
    genre: "Indonesian Pop",
    artist: "Lyla",
    musicPath: "./Kamu Cantik Kamu Baik.mp3",
  },
  {
    backgroundImage: "./images/Kamu Ngga' Sendirian.jpg",
    posterUrl: "./images/Kamu Ngga' Sendirian.jpg",
    title: "Kamu Ngga' Sendirian",
    album: "Discography Hitam Putih",
    genre: "Indonesian Rock",
    artist: "Tipe-X",
    musicPath: "./Kamu Ngga' Sendirian.mp3",
  },
  {
    backgroundImage: "./images/Kau Dan Aku Satu.jpg",
    posterUrl: "./images/Kau Dan Aku Satu.jpg",
    title: "Kau Dan Aku Satu",
    album: "Kau Dan Aku Satu",
    genre: "Indonesian Pop",
    artist: "Obbie Messakh",
    musicPath: "./Kau Dan Aku Satu.mp3",
  },
  {
    backgroundImage: "./images/Kemesraan.jpg",
    posterUrl: "./images/Kemesraan.jpg",
    title: "Kemesraan",
    album: "15 Hit's No.1",
    genre: "Indonesian Pop",
    artist: "Etrie Jayanthie, Jamal Mirdad, Rafika Duri, Iwan Fals, Itang Yunasz, Betharia Sonatha, Nani Sugianto, Chrisye",
    musicPath: "./Kemesraan.mp3",  
  },
  {
    backgroundImage: "./images/Kumenanti Seorang Kekasih.jpg",
    posterUrl: "./images/Kumenanti Seorang Kekasih.jpg",
    title: "Kumenanti Seorang Kekasih",
    album: "Barang Antik",
    genre: "Indonesian Pop",
    artist: "Iwan Fals",
    musicPath: "./Kumenanti Seorang Kekasih.mp3",
  },
  {
    backgroundImage: "./images/Kun Anta.jpg",
    posterUrl: "./images/Kun Anta.jpg",
    title: "Kun Anta",
    album: "Aseer Ahsan",
    genre: "Islamic",
    artist: "Humood AlKhudher",
    musicPath: "./Kun Anta.mp3",
  },
  {
    backgroundImage: "./images/Lebih Indah.jpg",
    posterUrl: "./images/Lebih Indah.jpg",
    title: "Lebih Indah",
    album: "Lebih Indah",
    genre: "Indonesian Pop",
    artist: "Adera",
    musicPath: "./Lebih Indah.mp3",
  },
  {
    backgroundImage: "./images/Love Lights.jpg",
    posterUrl: "./images/Love Lights.jpg",
    title: "Love Lights",
    album: "Love Lights",
    genre: "Alternative & Indie",
    artist: "Sunset Sons",
    musicPath: "./Love Lights.mp3",
  },
  {
    backgroundImage: "./images/Magic.jpg",
    posterUrl: "./images/Magic.jpg",
    title: "Magic",
    album: "Lebih Dari Bintang",
    genre: "Indonesian Pop",
    artist: "Lyla",
    musicPath: "./Magic.mp3",
  },
  {
    backgroundImage: "./images/My Love.jpg",
    posterUrl: "./images/My Love.jpg",
    title: "My Love",
    album: "Coast To Coast (Expanded Edition)",
    genre: "Pop",
    artist: "Westlife",
    musicPath: "./My Love.mp3",
  },
  {
    backgroundImage: "./images/Night Changes.jpg",
    posterUrl: "./images/Night Changes.jpg",
    title: "Night Changes",
    album: "FOUR (Deluxe)",
    genre: "Pop",
    artist: "One Direction",
    musicPath: "./Night Changes.mp3",
  },
  {
    backgroundImage: "./images/Perfect.jpg",
    posterUrl: "./images/Perfect.jpg",
    title: "Perfect",
    album: "÷ (Deluxe)",
    genre: "Pop",
    artist: "Ed Sheeran",
    musicPath: "./Perfect.mp3",
  },
  {
    backgroundImage: "./images/Qalbi Fil Madinah.jpg",
    posterUrl: "./images/Qalbi Fil Madinah.jpg",
    title: "Qalbi Fil Madinah",
    album: "Qalbi Fil Madinah",
    genre: "Islamic",
    artist: "Maher Zain, Harris J.",
    musicPath: "./Qalbi Fil Madinah.mp3",
  },
  {
    backgroundImage: "./images/Rindu Muhammadku.jpg",
    posterUrl: "./images/Rindu Muhammadku.jpg",
    title: "Rindu Muhammadku",
    album: "Muhammad Nabiku",
    genre: "Islamic",
    artist: "Haddad Alwi, Vita, Ebith",
    musicPath: "./Rindu Muhammadku.mp3",
  },
  {
    backgroundImage: "./images/Salam Alaikum.jpg",
    posterUrl: "./images/Salam Alaikum.jpg",
    title: "Salam Alaikum",
    album: "Salam",
    genre: "Islamic",
    artist: "Harris J.",
    musicPath: "./Salam Alaikum.mp3",
  },
  {
    backgroundImage: "./images/Salam Rindu.jpg",  
    posterUrl: "./images/Salam Rindu.jpg",
    title: "Salam Rindu",
    album: "Mereka Tak Pernah Mengerti",
    genre: "Indonesian Pop",
    artist: "Tipe-X",
    musicPath: "./Salam Rindu.mp3",
  },
  {
    backgroundImage: "./images/See You Again (feat. Charlie Puth).jpg",
    posterUrl: "./images/See You Again (feat. Charlie Puth).jpg",
    title: "See You Again (feat. Charlie Puth)",
    album: "See You Again (feat. Charlie Puth)",
    genre: "Pop Rap",
    artist: "Wiz Khalifa & Charlie Puth",
    musicPath: "./See You Again (feat. Charlie Puth).mp3",
  },
  {
    backgroundImage: "./images/Something Just Like This.jpg",
    posterUrl: "./images/Something Just Like This.jpg",
    title: "Something Just Like This",
    album: "Something Just Like This",
    genre: "EDM",
    artist: "The Chainsmokers, Coldplay",
    musicPath: "./Something Just Like This.mp3",
  },
  {
    backgroundImage: "./images/Steal My Girl.jpg",
    posterUrl: "./images/Steal My Girl.jpg",
    title: "Steal My Girl",
    album: "FOUR (Deluxe)",
    genre: "Pop Rock",
    artist: "One Direction",
    musicPath: "./Steal My Girl.mp3",
  },
  {
    backgroundImage: "./images/Stereo Hearts (feat. Adam Levine).jpg",
    posterUrl: "./images/Stereo Hearts (feat. Adam Levine).jpg",
    title: "Stereo Hearts (feat. Adam Levine)",
    album: "The Papercut Chronicles ⅠⅠ",
    genre: "Pop Rap",
    artist: "Gym Class Heroes, Adam Levine",
    musicPath: "./Stereo Hearts (feat. Adam Levine).mp3",
  },
  {
    backgroundImage: "./images/Sunset Di Tanah Anarki.jpg",
    posterUrl: "./images/Sunset Di Tanah Anarki.jpg",
    title: "Sunset Di Tanah Anarki",
    album: "Sunset di Tanah Anarki",
    genre: "Indonesian Rock",
    artist: "Superman Is Dead",
    musicPath: "./Sunset Di Tanah Anarki.mp3",
  },
  {
    backgroundImage: "./images/Symphony (feat. Zara Larsson).jpg",
    posterUrl: "./images/Symphony (feat. Zara Larsson).jpg",
    title: "Symphony (feat. Zara Larsson)",
    album: "Symphony (feat. Zara Larsson)",
    genre: "Classical Pop",
    artist: "Clean Bandit, Zara Larsson",
    musicPath: "./Symphony (feat. Zara Larsson).mp3",
  },
  {
    backgroundImage: "./images/Tak Ingin Sendiri.jpg",
    posterUrl: "./images/Tak Ingin Sendiri.jpg",
    title: "Tak Ingin Sendiri Cover",
    album: "Tak Ingin Sendiri",
    genre: "Indonesian Pop",
    artist: "Felix Irwan",
    musicPath: "./Tak Ingin Sendiri Cover.mp3",
  }, 
  {
    backgroundImage: "./images/Tak Selalu.jpg",
    posterUrl: "./images/Tak Selalu.jpg",
    title: "Tak Selalu",
    album: "Mestakung",
    genre: "Reggae",
    artist: "Souljah",
    musicPath: "./Tak Selalu.mp3",
  }, 
  {
    backgroundImage: "./images/To the Bone.jpg",
    posterUrl: "./images/To the Bone.jpg",
    title: "To the Bone",
    album: "Flying Solo",
    genre: "Rhythm & Blues",
    artist: "Pamungkas",
    musicPath: "./To the Bone.mp3",
  },
  {
    backgroundImage: "./images/Tombo Ati.jpg",
    posterUrl: "./images/Tombo Ati.jpg",
    title: "Tombo Ati",
    album: "Istighfar",
    genre: "Islamic",
    artist: "Opick",
    musicPath: "./Tombo Ati.mp3",
  },
  {
    backgroundImage: "./images/Way Back Home.jpg",
    posterUrl: "./images/Way Back Home.jpg",
    title: "Way Back Home",
    album: "Take",
    genre: "EDM",
    artist: "SHAUN",
    musicPath: "./Way Back Home.mp3", 
  },
  {
    backgroundImage: "./images/Yang Terlupakan.jpg",
    posterUrl: "./images/Yang Terlupakan.jpg",
    title: "Yang Terlupakan",
    album: "Mata Dewa",
    genre: "Indonesian Pop",
    artist: "Iwan Fals",
    musicPath: "./Yang Terlupakan.mp3",
  },
  {
    backgroundImage: "./images/너 같은 사람 또 없어 No Other.jpg",
    posterUrl: "./images/너 같은 사람 또 없어 No Other.jpg",
    title: "너 같은 사람 또 없어 No Other",
    album: "미인아 (Bonamana)",
    genre: "Hip-Hop",
    artist: "SUPER JUNIOR",
    musicPath: "./너 같은 사람 또 없어 No Other.mp3",
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
const playerGenre = document.querySelector("[data-genre]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerGenre.textContent = musicData[currentMusic].genre;
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
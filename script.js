const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const music = document.getElementById('music');
const musicList = document.getElementsByTagName('li');
const progressBar = document.getElementById('progress-bar');
let currentTrack = 0;
let currentList;

let tracks = [
			{
				"track": 1,
				"name": "1984",
				"artist": "Superman Is Dead, Keroncong Seba",
				"duration": "04:24",
				"musicPath": "1984.mp3"            	
			}
			,
			{
            	"track": 2,
                "name": "Allahi Allah Kiya Karo",
                "artist": "Maher Zain, Irfan Makki",
                "duration": "05:15",
                "musicPath": "Allahi Allah Kiya Karo (feat. Irfan Makki).mp3"            	
            }
			,
			{
            	"track": 3,
                "name": "Anta Syamsun Anta Badrun",
                "artist": "Muhajar, Muhajir, Saiful Rizal",
                "duration": "04:25",
                "musicPath": "Anta Syamsun Anta Badrun.mp3"            	
            }
			,
			{
            	"track": 4,
                "name": "Baraka Allahu Lakuma",
                "artist": "Maher Zain",
                "duration": "04:30",
                "musicPath": "Baraka Allahu Lakuma.mp3"            	
            }
			,
			{
            	"track": 5,
                "name": "Can't Catch Me",
                "artist": "Avicii",
                "duration": "03:59",
                "musicPath": "Can't Catch Me.mp3"            	
            }
			,
			{
				"track": 6,
				"name": "Ceria",
				"artist": "J-Rocks",
				"duration": "03:52",
				"musicPath": "Ceria.mp3"            	
			}
			,
			{
            	"track": 7,
                "name": "Dead Young",
                "artist": "Only The Poets",
                "duration": "03:02",
                "musicPath": "Dead Young.mp3"            	
            }
			,
            {
            	"track": 8,
                "name": "Dear God",
                "artist": "Avenged Sevenfold",
                "duration": "06:33",
                "musicPath": "Dear God.mp3"            	
            }
			,
			{
            	"track": 9,
                "name": "Dengan Hati",
                "artist": "Lyla",
                "duration": "04:11",
                "musicPath": "Dengan Hati.mp3"            	
            }
			,
			{
            	"track": 10,
                "name": "Dusk Till Dawn",
                "artist": "Zayn, Sia",
                "duration": "03:59",
                "musicPath": "Dusk Till Dawn (feat. Sia) - Radio Edit.mp3"           	
            }
			,
			{
            	"track": 11,
                "name": "Faded - Instrumental",
                "artist": "Alan Walker",
                "duration": "03:33",
                "musicPath": "Faded - Instrumental.mp3"            	
            }
			,
			{
            	"track": 12,
                "name": "Hari Bersamanya",
                "artist": "Sheila On 7",
                "duration": "03:51",
                "musicPath": "Hari Bersamanya.mp3.mp3"            	
            }
			,
			{
            	"track": 13,
                "name": "High On Life",
                "artist": "Martin Garrix, Bonn",
                "duration": "03:47",
                "musicPath": "High On Life (feat. Bonn).mp3"            	
            }
			,
			{
            	"track": 14,
                "name": "I'm Yours",
                "artist": "Jason Mraz",
                "duration": "04:02",
                "musicPath": "I'm Yours.mp3"            	
            }
			,
			{
            	"track": 15,
                "name": "Im Free",
                "artist": "Souljah",
                "duration": "03:44",
                "musicPath": "Im Free.mp3"            	
            }
			,
			{
            	"track": 16,
                "name": "Insha Allah",
                "artist": "Maher Zain, Fadly",
                "duration": "04:24",
                "musicPath": "Insha Allah (feat. Fadly).mp3"            	
            }
			,
			{
            	"track": 17,
                "name": "It's You",
                "artist": "Ali Gatie",
                "duration": "03:31",
                "musicPath": "It's You.mp3"            	
            }
			,
			{
            	"track": 18,
                "name": "Jadilah Legenda",
                "artist": "Superman Is Dead",
                "duration": "05:00",
                "musicPath": "Jadilah Legenda.mp3"            	
            }
			,
			{
            	"track": 19,
                "name": "Kamu Cantik Kamu Baik",
                "artist": "Lyla",
                "duration": "04:06",
                "musicPath": "Kamu Cantik Kamu Baik.mp3"            	
            }
			,
			{
				"track": 20,
				"name": "Kamu Ngga' Sendirian",
				"artist": "Tipe-X",
				"duration": "04:35",
				"musicPath": "Kamu Ngga' Sendirian.mp3"            	
			}
			,
			{
				"track": 21,
				"name": "Kau Auraku",
				"artist": "Ada Band",
				"duration": "04:32",
				"musicPath": "Kau Auraku.mp3"            	
			}			
			,				
			{
            	"track": 22,
                "name": "Kumenanti Seorang Kekasih",
                "artist": "Iwan Fals",
                "duration": "03:40",
                "musicPath": "Kumenanti Seorang Kekasih.mp3"            	
            }
			,
			{
            	"track": 23,
                "name": "Lebih Indah",
                "artist": "Adera",
                "duration": "04:18",
                "musicPath": "Lebih Indah.mp3"            	
            }
			,
			{
            	"track": 24,
                "name": "Love Lights",
                "artist": "Sunset Sons",
                "duration": "03:37",
                "musicPath": "Love Lights.mp3"            	
            }
			,
			{
            	"track": 25,
                "name": "Magic",
                "artist": "Lyla",
                "duration": "03:52",
                "musicPath": "Magic.mp3"            	
            }
			,
			{
            	"track": 26,
                "name": "Mawar Hitam",
                "artist": "Tipe-X",
                "duration": "04:30",
                "musicPath": "Mawar Hitam.mp3"            	
            }
			,
			{
            	"track": 27,
                "name": "My Love",
                "artist": "Westlife",
                "duration": "03:51",
                "musicPath": "My Love.mp3"            	
            }
			,
			{
            	"track": 28,
                "name": "Night Changes",
                "artist": "One Direction",
                "duration": "03:46",
                "musicPath": "Night Changes.mp3"            	
            }
			,
			{
            	"track": 29,
                "name": "Payphone",
                "artist": "Maroon 5, Wiz Khalifa",
                "duration": "03:52",
                "musicPath": "Payphone.mp3"            	
            }
			,
			{
            	"track": 30,
                "name": "Perfect",
                "artist": "Ed Sheeran",
                "duration": "04:23",
                "musicPath": "Perfect.mp3"            	
            }
			,
			{
            	"track": 31,
                "name": "Rindu Muhammadku",
                "artist": "Haddad Alwi, Vita, Ebith",
                "duration": "02:52",
                "musicPath": "Rindu Muhammadku.mp3"            	
            }					
			,
			{
            	"track": 32,
                "name": "Safe and Sound",
                "artist": "Rebelution",
                "duration": "03:49",
                "musicPath": "Safe and Sound.mp3"            	
            }
			,
			{
            	"track": 33,
                "name": "Salam Rindu",
                "artist": "Tipe-X",
                "duration": "03:43",
                "musicPath": "Salam Rindu.mp3"            	
            }
			,
			{
            	"track": 34,
                "name": "See You Again",
                "artist": "Wiz Khalifa & Charlie Puth",
                "duration": "03:49",
                "musicPath": "See You Again (feat. Charlie Puth).mp3"            	
            }
			,
			{
            	"track": 35,
                "name": "Sholawat Badar",
                "artist": "Nahdlatul Ulama",
                "duration": "03:46",
                "musicPath": "Sholawat Badar (feat. Saiful Rizal).mp3"            	
            }
			,
			{
            	"track": 36,
                "name": "Sore Tugu Pancoran",
                "artist": "Iwan Fals",
                "duration": "04:09",
                "musicPath": "Sore Tugu Pancoran.mp3"            	
            }	
			,
			{
            	"track": 37,
                "name": "Spongebob Ngefly",
                "artist": "SMVLL",
                "duration": "03:39",
                "musicPath": "Spongebob Ngefly.mp3"            	
            }			
			,
			{
            	"track": 38,
                "name": "Steal My Girl",
                "artist": "One Direction",
                "duration": "03:47",
                "musicPath": "Steal My Girl.mp3"            	
            }	
			,			
			{
            	"track": 39,
                "name": "Stereo Hearts",
                "artist": "Gym Class Heroes, Adam Levine",
                "duration": "03:37",
                "musicPath": "Stereo Hearts (feat. Adam Levine).mp3"            	
            }
			,
			{
            	"track": 40,
                "name": "Sugali",
                "artist": "Iwan Fals",
                "duration": "04:51",
                "musicPath": "Sugali.mp3"            	
            }			
			,
			{
            	"track": 41,
                "name": "Sunset Di Tanah Anarki",
                "artist": "Superman Is Dead",
                "duration": "05:28",
                "musicPath": "Sunset Di Tanah Anarki.mp3"            	
            }
			,
			{
            	"track": 42,
                "name": "Symphony",
                "artist": "Clean Bandit, Zara Larsson",
                "duration": "03:30",
                "musicPath": "Symphony (feat. Zara Larsson).mp3"            	
            }
			,
			{
            	"track": 43,
                "name": "Tak Selalu",
                "artist": "Souljah",
                "duration": "03:46",
                "musicPath": "Tak Selalu.mp3"            	
            }
			,
			{
				"track": 44,
				"name": "To the Bone",
				"artist": "Pamungkas",
				"duration": "05:43",
				"musicPath": "To the Bone.mp3"            	
			}			
			,
			{
            	"track": 45,
                "name": "Tombo Ati",
                "artist": "Opick",
                "duration": "05:25",
                "musicPath": "Tombo Ati.mp3"            	
            }
			,
			{
            	"track": 46,
                "name": "Wavin' Flag",
                "artist": "K'naan",
                "duration": "03:32",
                "musicPath": "Wavin' Flag (Coca-Cola Celebration Mix).mp3"            	
            }
			,			
			{
            	"track": 47,
                "name": "Way Back Home",
                "artist": "Shaun",
                "duration": "03:34",
                "musicPath": "Way Back Home.mp3"            	
            }
			,
			{
            	"track": 48,
                "name": "Ya Sudahlah",
                "artist": "Bondan Prakoso, Fade2Black",
                "duration": "04:09",
                "musicPath": "Ya Sudahlah.mp3"            	
            }			
			,
			{
				"track": 49,
				"name": "Yang Terlupakan",
				"artist": "Iwan Fals",
				"duration": "04:56",
				"musicPath": "Yang Terlupakan.mp3"            	
			}
			,
			{
				"track": 50,
				"name": "너 같은 사람 또 없어 No Other",
				"artist": "Super Junior",
				"duration": "04:16",
				"musicPath": "너 같은 사람 또 없어 No Other.mp3"            	
			}
         	];
 
function init() {
	if (currentTrack === 0) {
		music.src = tracks[0].musicPath;
		music.load();
	}

	for(let i=0; i<tracks.length; i++){
		$('ul').append(`<li id="${i}"><div class="wrapper"><div>${tracks[i].track}</div><div>${tracks[i].name}</div><div>${tracks[i].artist}</div><div>${tracks[i].duration}</div></div></li><hr/>`);
	}

	for(let musicIndex=0; musicIndex<musicList.length; musicIndex++){
		musicList[musicIndex].addEventListener('click', switchMusic, false);
	}
}

function switchMusic(e) {

	if(currentList !== undefined) {
		removePlayedBackground();
		music.pause();
	}	
	currentTrack = this.id;
	music.src = tracks[currentTrack].musicPath;
	music.load();
	play();

}

function addChoosedBackground() {
	currentList = document.getElementById(currentTrack);
	currentList.classList.add("song-play-now");


}

function removePlayedBackground() {
	currentList.classList.remove("song-play-now");

}

function play() {
	playBtn.classList.add("hidden");
	pauseBtn.classList.remove("hidden");
	
	music.play();
	musicIsPlaying = true;
	addChoosedBackground();
	document.getElementById('end-time').innerHTML = tracks[currentTrack].duration;
}

function pause() {
	pauseBtn.classList.add("hidden");
	playBtn.classList.remove("hidden");

	musicIsPlaying = false;
	music.pause();
}


function prePlay() {
	removePlayedBackground();
	music.pause();

	if (currentTrack > 0){
		currentTrack --;

	} else {
		currentTrack = tracks.length-1;
	}
	
	music.src = tracks[currentTrack].musicPath;
	music.load();
	play();

}

function nextPlay() {
	removePlayedBackground();
	music.pause();
	
	if (currentTrack < tracks.length-1){
		currentTrack ++;

	} else {
		currentTrack = 0;
	}

	music.src = tracks[currentTrack].musicPath;
	music.load();
	play();

}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time;
}

function formatTime() {
	let timeline = document.getElementById('start-time');
    let s = parseInt(music.currentTime % 60);
    let m = parseInt((music.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}

function updateProgress() {
	let current = music.currentTime;
	let percent = (current / music.duration) * 100;
	progressBar.setAttribute('value', percent);

}

playBtn.addEventListener('click', play, false);
pauseBtn.addEventListener('click', pause, false);
preBtn.addEventListener('click', prePlay, false);
nextBtn.addEventListener('click', nextPlay, false);
music.addEventListener('ended', nextPlay, false);

// 歌曲已播放時間
music.addEventListener("timeupdate", formatTime, false);
music.addEventListener("timeupdate", updateProgress, false);



init();
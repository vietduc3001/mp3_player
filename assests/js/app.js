// --------------------- define variable ---------------------------
const playBtn = document.querySelector('.play-inner');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const playForward = document.querySelector('.play-forward');
const playBack = document.querySelector('.play-back');
const currentTimeSong = document.querySelector('.current-time');
const durationSong = document.querySelector('.duration');
const rangeSong = document.querySelector('.range-song')
const btnRepeat = document.querySelector('.play-repeat')
const btnShuffle = document.querySelector('.play-shuffle')


let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

// -------------- Xu ly mac dinh khi moi vao ------------------------
let currentSong = listSongs[0];
var indexSong = 0;

function loadSong(curSong) {
    const musicThumb = document.querySelector('.music-thumb-img');
    const musicName = document.querySelector('.music-name');
    const song = document.getElementById('song');

    musicThumb.setAttribute('src', curSong.thumb);
    musicName.textContent = curSong.name;
    song.setAttribute('src', curSong.src);
}

loadSong(currentSong);
currentTimeSong.textContent = '00:00';
durationSong.textContent = '00:00';

// -------------------------------------------------------------------

playBtn.addEventListener('click', playPause);
playBack.addEventListener('click', previousSong);
playForward.addEventListener('click', nextSong);
btnRepeat.addEventListener('click', repeatSong);
btnShuffle.addEventListener('click', shuffleSong);

// Phat nhac/tam dung
function playPause() {
    
    playIcon.classList.toggle('play-active');
    pauseIcon.classList.toggle('play-active');
    if (isPlaying) {
        song.pause();
        isPlaying = false;
        clearInterval(displayTime);
    } else {
        song.play();
        isPlaying = true;
        setInterval(displayTime, 500);
    }
}

// Chuyen sang bai phia truoc
function previousSong() {
    if (isShuffle) {
        shuffleNewSong()
    } else {
        indexSong--;
        if (indexSong < 0) indexSong = listSongs.length - 1;
        currentSong = listSongs[indexSong];
        loadSong(currentSong);
        if (isPlaying) song.play();
    }
}

// Chuyen sang bai tiep theo
function nextSong() {
    if (isShuffle) {
        shuffleNewSong();
    } else {
        indexSong++;
        if (indexSong >= listSongs.length) indexSong = 0;
        currentSong = listSongs[indexSong];
        loadSong(currentSong);
        if (isPlaying) song.play();
    }
}

// Xu ly lap lai bai hat
function repeatSong() {
    btnRepeat.classList.toggle('btn-active');
    isRepeat = !isRepeat;
    song.loop = !song.loop;
}

// XU ly phat ngau nhien
function shuffleSong() {
    btnShuffle.classList.toggle('btn-active')
    isShuffle = !isShuffle;
}

let playedList = [];
function shuffleNewSong() {
    let newIndexSong;
    if (playedList.length === listSongs.length) {
        playedList = [];
    }
    do {
        newIndexSong = Math.floor(Math.random() * listSongs.length)
    } while (playedList.includes(newIndexSong))
    indexSong = newIndexSong;
    playedList.push(indexSong);
    currentSong = listSongs[indexSong];
    loadSong(currentSong);
    if (isPlaying) song.play();
}

// Hien thi thoi gian hien tai cua bai hat
function displayTime() {
    currentTimeSong.textContent = formatTime(song.currentTime);
    durationSong.textContent = formatTime(song.duration);
    rangeSongVal = song.currentTime / song.duration * 100;
    rangeSong.style.backgroundSize = `${rangeSongVal}% 10px`;
    if (song.ended) {
        if (isRepeat === true) {
            song.load();
            song.play();
        }
        else if (isShuffle) {
            shuffleNewSong();
        } else nextSong();
    }
}

// Dinh dang thoi gian ve dang 00:00
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
}

// 
rangeSong.addEventListener('input', () => {
    rangeSong.style.backgroundSize = `${rangeSong.value}% 10px`;
    song.currentTime = rangeSong.value / 100 * song.duration;
})
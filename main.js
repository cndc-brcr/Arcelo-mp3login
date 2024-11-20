// Variables
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const playPauseBtn = document.getElementById('play-pause-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const currentSongElement = document.getElementById('current-song');

let currentSongIndex = 0;
const songs = [
    {
        title: 'Square (2017)',
        src: '/songs /Square1.mp3'
    },
    {
        title: 'Popo (How deep is our love)',
        src: '/songs /Popo.mp3'
    },
    {
        title: 'Rest',
        src: '/songs /Rest.mp3'
    },
    {
        title: '0310',
        src: '/songs /Number.mp3'
    }
];


function playSong(index) {
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    audioSource.src = song.src;
    audioPlayer.load();
    audioPlayer.play();
    currentSongElement.innerText = song.title;
    playPauseBtn.innerText = 'Play';
}

function playCurrentSong() {
    const currentSong = songs[currentSongIndex];
    playSong(currentSongIndex);
}

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerText = 'Play';
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playCurrentSong();
});

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
});

playCurrentSong();

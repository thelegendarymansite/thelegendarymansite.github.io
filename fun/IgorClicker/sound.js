let songs = [];

let songCounter = 0;

function backgroundMusic() {

    for (let i = 0; i < songs.length; i++) {
        songs[i].setVolume(0.05);
        songs[i].playMode('untilDone');
    }

    if (!songs[songCounter].isPlaying()) {
        nextSong();
    }

    songs[songCounter].play();

}

function nextSong() {
    if (songCounter + 1 < songs.length) {
        songCounter++;
    }
    else {
        songCounter = 0;
    }
}

function playIgorClick() {
    igorClickSound.setVolume(0.5);
    igorClickSound.play();
}
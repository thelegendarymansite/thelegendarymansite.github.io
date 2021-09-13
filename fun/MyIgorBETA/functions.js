let playModeSelected = false;


function playMenuMusic() {
    if (!menuMusic.isPlaying()) {

        menuMusic.play();
        //menuMusic.volume(0.001);

    }


    if (!playModeSelected) {
        menuMusic.playMode('restart');
        playModeSelected = true;
    }

}
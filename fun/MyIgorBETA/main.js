function preload() {

    ruskiFont = loadFont('MyIgorBETA/misc/troika.otf');

    bgMain = loadImage('MyIgorBETA/textures/infinitebg.png');

    igorSmall = loadImage('MyIgorBETA/textures/igorMain.png');

    hoverSound = loadSound('MyIgorBETA/sounds/hoverSound2.wav');

    clickSound = loadSound('MyIgorBETA/sounds/clickSound.wav');

    menuMusic = loadSound('MyIgorBETA/sounds/menuMusic.mp3');

}


let menu = "mainMenu";
let inMenu = true;

let playing = false;

let hb;


function setup() {

    createCanvas(600, 600);

    LoadMenus();

    textFont(ruskiFont);
    textAlign(CENTER, CENTER);
    textSize(width / 20);

    rectMode(CENTER);

    angleMode(DEGREES);

    noStroke();


    hb = new HoverButton();

}


function draw() {

    if (inMenu) {
        Menu();
    }

}

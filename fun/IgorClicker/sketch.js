function preload() {
    igorClickSound = loadSound("IgorClicker/assets/sounds/ir.wav");
    bgMusic1 = loadSound("IgorClicker/assets/sounds/bg1.mp3");
    bgMusic2 = loadSound("IgorClicker/assets/sounds/bg2.mp3");
    test1 = loadSound("IgorClicker/assets/sounds/clickSound.wav");
    test2 = loadSound("IgorClicker/assets/sounds/ir.wav");
}

function windowResized() {
    resizeCanvas(800, 600);
}

function setup() {

    songs.push(bgMusic1, bgMusic2);
    backgroundImage = loadImage("IgorClicker/assets/textures/shopbg.png");
    igorImage = loadImage("IgorClicker/assets/textures/igorMain.png");
    font = loadFont('IgorClicker/assets/fonts/troika.otf');


    createCanvas(800, 600);

    rectMode(CENTER);
    textAlign(CENTER, CENTER);

    igor = new Igor(width / 2, height / 2, 100, 102);
    students = new Students();


    // Bad stuff
    songs[0].setVolume(0.05);
    songs[0].play();

    //button1 = new HoverButton(width / 2, height / 2, 100, 50, color(100), color(120), 5);

}



function draw() {

    push();
    background(0);
    image(backgroundImage, 0, 0, width, height);
    translate(width / 2, height / 2);
    pop();


    // Igor
    push();
    imageMode(CENTER);
    igor.draw();
    pop();

    // Current Students Text
    push();
    students.showCurrentStudents();
    pop();
    //button1.draw();


    // Music
    backgroundMusic();

}
let menuNum = 0;

// 0 - main menu
// 1 - load menu
// 2 - start

let bgImg;
let g;

function preload() {
    bgImg = loadImage('MyIgor/textures/stars.png');
    ruskiFont = loadFont('MyIgor/textures/troika.otf');
    igor = loadImage('MyIgor/textures/igorMain.png');
}

function setup() {

    createCanvas(600, 600);
    rectMode(CENTER);

    textFont(ruskiFont);
    textAlign(CENTER, CENTER);

    g = new Game();

    noStroke();

}



function draw() {


    // Main Menu
    if (menuNum == 0) {

        textSize(width / 10);
        fill(255);


        background(0);
        image(bgImg, 0, 0, 600, 600);



        text("My Igor", width / 2, height / 4 - 5);

        textSize(width / 20);

        text("version 0.0.2", width / 2, height / 1.05 - 5);



        // Start Button

            // Hover Effect
        if (HoveredOver(width / 2 - 250 / 2, height / 2 - 75 / 2, width / 2 + 250 / 2, height / 2 + 75 / 2)) {
            fill(120);
            if (mouseIsPressed) {
                menuNum = 2;
            }
        }
        else {
            fill(100);
        }

        rect(width / 2, height / 2, 250, 75, 10);
        fill(255);
        text("New Game", width / 2, height / 2 - 5);

        // Load Button

        fill(100);

            // Hover Effect
        if (HoveredOver(width / 2 - 250 / 2, height / 1.5 - 75 / 2, width / 2 + 250 / 2, height / 1.5 + 75 / 2)) {
            fill(120);
            if (mouseIsPressed) {
                menuNum = 1;
            }
        }
        else {
            fill(100);
        }

        rect(width / 2, height / 1.5, 250, 75, 10);
        fill(255);
        text("Load Game", width / 2, height / 1.5 - 5);

    }

    // Load Menu
    else if (menuNum == 1) {
        textSize(width / 20);

        fill(100);

        background(0);
        image(bgImg, 0, 0, 600, 600);

        // Password Input Box

        // passwordInput = createInput();
        // passwordInput.position(width / 2 - 350 / 4, height / 2 - 75 / 4);
        rect(width / 2, height / 2, 350, 75, 10);
        fill(255);
        textSize(width / 20);

        text("Not implemented yet", width / 2, height / 2 - 5);
        textSize(width / 20);


        // Load Button

        fill(100);

            // Hover Effect
        if (HoveredOver(width / 2 - 250 / 2, height / 1.5 - 75 / 2, width / 2 + 250 / 2, height / 1.5 + 75 / 2)) {
            fill(120);
        }
        else {
            fill(100);
        }

        rect(width / 2, height / 1.5, 250, 75, 10);
        fill(255);
        text("Submit", width / 2, height / 1.5 - 5);

        // Back Button

        fill(100);

            // Hover Effect
        if (HoveredOver(width / 2 - 250 / 2, height / 1.2 - 75 / 2, width / 2 + 250 / 2, height / 1.2 + 75 / 2)) {
            fill(120);
            if (mouseIsPressed) {
                menuNum = 0;
            }
        }
        else {
            fill(100);
        }

        rect(width / 2, height / 1.2, 250, 75, 10);
        fill(255);
        text("Back", width / 2, height / 1.2 - 5);
    }

    // Game
    else if (menuNum == 2) {

        fill(100);

        g.checkInput();
        g.drawBackground();
        g.drawButtons();
        g.drawIgor();
        g.drawText();

    }

    else if (menuNum == 3) {
        
        fill(100);

        background(0);
        image(bgImg, 0, 0, 600, 600);

        // Back Button

        fill(100);

            // Hover Effect
        if (HoveredOver(width / 2 - 250 / 2, height / 1.1 - 75 / 2, width / 2 + 250 / 2, height / 1.1 + 75 / 2)) {
            fill(120);
            if (mouseIsPressed && !g.pressed) {
                print("back");
                g.pressed = true;
                menuNum = 2;
            }
        }
        else {
            fill(100);
        }

        rect(width / 2, height / 1.1, 250, 75, 10);

        fill(255);
        text("Back", width / 2, height / 1.1 - 5);
    }

}



function HoveredOver(x1, y1, x2, y2) {

    // Checks if mouse is hovering over:
    //
    //  x1y1______________
    //  |                 |
    //  |       this      |
    //  |_________________x2y2
    //

    if (mouseX <= x2 && mouseX >= x1) {
        if (mouseY <= y2 && mouseY >= y1) {
            return true;
        }
    }
    return false;
}
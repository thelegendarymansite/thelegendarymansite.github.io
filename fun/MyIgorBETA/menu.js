let menuButtons = [];
let loadMenuButtons = [];
let questionMenuButtons = [];

let bgX = 0;
let angle = 0;
let angleChange = 0.3;

let fis = [];

function LoadMenus() {
    // menuButtons.push(new HoverButton(width / 2, height / 2, 100, 75, 10, 100, 120, "Play", 255, width / 20, "loadMenu"));
    // menuButtons.push(new HoverButton(width / 2, height / 1.5, 100, 75, 10, 100, 120, "Load", 255, width / 20, "loadMenu"));
    menuButtons.push(new HoverButton(width / 2 - 75, height / 1.3, 100, 75, 10, 100, 120, "Play", 255, width / 20, "questionStart"));
    menuButtons.push(new HoverButton(width / 2 + 75, height / 1.3, 100, 75, 10, 100, 120, "Load", 255, width / 20, "loadMenu"));

    loadMenuButtons.push(new HoverButton(width / 2, height / 1.3, 100, 75, 10, 100, 120, "Back", 255, width / 20, "mainMenu"));

    questionMenuButtons.push(new HoverButton(width / 2, height / 1.3, 100, 75, 10, 100, 120, "Go", 255, width / 20, "mainMenu"));

    for (let i = 0; i < 10; i++) {
        fis.push(new FlyingIgor());
    }
}

function Menu() {

    if (menu == "mainMenu") {

        push();

        textSize(width / 10);
        fill(0);
        background(0);
        
        // <<Background>>

        image(bgMain, bgX, 0, windowWidth, windowHeight);
        image(bgMain, bgX + windowWidth, 0, windowWidth, windowHeight);

        bgX -= 1;

        if (bgX <= -windowWidth) {
            bgX = 0;
        }


        // <<Flying Igors>>
        for (let i = 0; i < fis.length; i++) {
            fis[i].draw();
        }

        // <<Buttons>>
        for (let i = 0; i < menuButtons.length; i++) {
            menuButtons[i].DrawButton();
        }


        // <<Text>>
        push();

        textSize(width / 6);

        translate(width / 2, height / 4);

        rotate(angle);

        angle = map(sin(angleChange), -1, 1, -10, 10);

        angleChange += 2;

        stroke(0);
        strokeWeight(5);
        fill(0, 50);
        text("My Igor", 0, 0);
        pop();

        textSize(width / 20 + angle / 5);


        text("version 0.0.3", width / 2, height / 1.075 - 5);

        // <<Music>>
        playMenuMusic();

        pop();
    }

    if (menu == "loadMenu") {
        push();

        textSize(width / 10);
        fill(0);
        background(0);

        // <<Background>>

        image(bgMain, bgX, 0, windowWidth, windowHeight);
        image(bgMain, bgX + windowWidth, 0, windowWidth, windowHeight);

        bgX -= 1;

        if (bgX <= -windowWidth) {
            bgX = 0;
        }

        // <<Flying Igors>>
        for (let i = 0; i < fis.length; i++) {
            fis[i].draw();
        }

        // <<Buttons>>
        for (let i = 0; i < loadMenuButtons.length; i++) {
            loadMenuButtons[i].DrawButton();
        }

        // <<Text>>
        push();

        textSize(width / 6);

        translate(width / 2, height / 4);

        rotate(angle);

        angle = map(sin(angleChange), -1, 1, -10, 10);

        angleChange += 2;

        stroke(0);
        strokeWeight(5);
        fill(0, 50);
        text("Load", 0, 0);
        pop();

        textSize(width / 20 + angle / 20);

        text("this function is not yet implemented", width / 2, height / 2 - 5);
        text("come back later to maybe see it work :)", width / 2, height / 2 - 5 + 30);

        textSize(width / 20 + angle / 5);


        //text("~make igor happy~", width / 2, height / 1.075 - 5);

        // <<Music>>
        playMenuMusic();

        pop();
    }

    if (menu == "questionStart") {
        push();

        textSize(width / 10);
        fill(0);
        background(0);

        // <<Background>>

        image(bgMain, bgX, 0, windowWidth, windowHeight);
        image(bgMain, bgX + windowWidth, 0, windowWidth, windowHeight);

        bgX -= 1;

        if (bgX <= -windowWidth) {
            bgX = 0;
        }

        // <<Flying Igors>>
        for (let i = 0; i < fis.length; i++) {
            fis[i].draw();
        }

        // <<Buttons>>
        for (let i = 0; i < questionMenuButtons.length; i++) {
            questionMenuButtons[i].DrawButton();
        }

        // <<Text>>
        push();

        textSize(width / 6);

        translate(width / 2, height / 4);

        rotate(angle);

        angle = map(sin(angleChange), -1, 1, -10, 10);

        angleChange += 2;

        stroke(0);
        strokeWeight(5);
        fill(0, 50);
        text("Play", 0, 0);
        pop();

        textSize(width / 20 + angle / 20);

        text("press \"GO\" to start game, but", width / 2, height / 2 - 5);
        text("this is as far as you can currently go", width / 2, height / 2 - 5 + 30);
        text("in this version of the game. :(", width / 2, height / 2 - 5 + 30 * 2);

        textSize(width / 20 + angle / 5);


        //text("rainus", width / 2, height / 1.075 - 5);

        // <<Music>>
        playMenuMusic();

        pop();
    }

}


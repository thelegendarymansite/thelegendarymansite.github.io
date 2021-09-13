let menuButtons = [];
let loadMenuButtons = [];

let fis = [];

function LoadMenus() {
    menuButtons.push(new HoverButton(width / 2, height / 2, 100, 75, 10, 100, 120, "Play", 255, width / 20));
    menuButtons.push(new HoverButton(width / 2, height / 1.5, 100, 75, 10, 100, 120, "Load", 255, width / 20));

    loadMenuButtons.push(new HoverButton(width / 2, height / 1.5, 100, 75, 10, 100, 120, "Back", 255, width / 20));

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
        image(bgMain, 0, 0, windowWidth, windowHeight);

        // <<Flying Igors>>
        for (let i = 0; i < fis.length; i++) {
            fis[i].draw();
        }

        // <<Buttons>>
        for (let i = 0; i < menuButtons.length; i++) {
            menuButtons[i].DrawButton();
        }


        // <<Text>>
        text("My Igor", width / 2, height / 4 - 5);

        textSize(width / 20);


        text("version 0.0.1 Beta", width / 2, height / 1.05 - 5);

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
        image(bgMain, 0, 0, windowWidth, windowHeight);

        // <<Buttons>>
        for (let i = 0; i < loadMenuButtons.length; i++) {
            loadMenuButtons[i].DrawButton();
        }

        pop();
    }

}


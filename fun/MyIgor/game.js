// how game work?

class Game {
    constructor() {
        this.pressed = false;

        this.tickleCount = 0;
    }

    drawBackground() {
        background(255, 200, 255);
    }

    drawButtons() {

        // what button do i add?
        //
        
        // Shop button
        rect(width / 2, height / 1.1, 100, 75, 10);

    }

    drawText() {
        push();
        fill(0);
        text("Times Igor has been tickled: " + this.tickleCount , width / 2, height / 20 - 5);
        fill(255);
        text("Shop", width / 2, height / 1.1 - 5);
        pop();
    }

    drawIgor() {
        image(igor, width / 2 - 50, height / 2 - 50, 100, 100);
    }

    checkInput() {

        // check if over igor + press
        if (HoveredOver(width / 2 - 50, height / 2 - 50, width / 2 + 50, height / 2 + 50)) {
            if (mouseIsPressed && !this.pressed) {
                this.tickleCount += 1;
                this.pressed = true;
            }
        }

        // check if over shop + press
        if (HoveredOver(width / 2 - 50, height / 1.1 - 75 / 2, width / 2 + 50, height / 1.1 + 75 / 2)) {
            fill(120);

            if (mouseIsPressed && !this.pressed) {
                this.pressed = true;
                print("shop");
                menuNum = 3;
            }
        }
        else {
            fill(100);
        }
    }
}

// why it no work????!?!?!?!???

function mouseReleased() {
    g.pressed = false;

}
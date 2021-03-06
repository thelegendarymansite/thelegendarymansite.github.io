class HoverButton {
    constructor(posX, posY, sizeX, sizeY, rounding, offColor, onColor, txt, txtColor, txtSize, destination) {
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.sizeXORG = sizeX;
        this.sizeYORG = sizeY;
        this.rounding = rounding;
        this.offColor = offColor;
        this.onColor = onColor;
        this.txt = txt;
        this.txtColor = txtColor;
        this.txtSize = txtSize;
        this.playing = false;
        this.playingClick = false;
        this.clicked = false;
        this.destination = destination;

        this.hoverSizeX = this.sizeX + 4;
        this.hoverSizeY = this.sizeY + 4;

    }

    DrawButton() {

        push();
    
        //if (this.HoveredOver(this.posX - this.sizeX / 2, this.posY - this.sizeY / 2, this.posX + this.sizeX / 2, this.posY + this.sizeY / 2)) {
        if (mouseX <= this.posX + this.sizeX / 2 && mouseX >= this.posX - this.sizeX / 2 && mouseY <= this.posY + this.sizeY / 2 && mouseY >= this.posY - this.sizeY / 2) {
    
            this.PlayHoverSound();
            this.playing = true;
            fill(this.onColor);

            this.sizeX = this.hoverSizeX;
            this.sizeY = this.hoverSizeY;

            if (mouseIsPressed && !this.clicked) {
                this.PlayClickSound();
                this.clicked = true;
                //this.playingClick = true;
            }
            if (!mouseIsPressed && this.clicked) {
                this.clicked = false;
                this.playingClick = false;
                menu = this.destination;
            }
        }
        else {
            this.playing = false;
            fill(this.offColor);

            this.sizeX = this.sizeXORG;
            this.sizeY = this.sizeYORG;
        }
    
        rect(this.posX, this.posY, this.sizeX, this.sizeY, this.rounding);
    
    
        fill(this.txtColor);
        textSize(this.txtSize);
    
    
        text(this.txt, this.posX, this.posY - 5);
    
        pop();
    }

    PlayHoverSound() {
        if (!this.playing) {
            hoverSound.play();
            this.playing = true;
        }
    }

    PlayClickSound() {
        if (!this.playingClick) {
            clickSound.play();
            this.playingClick = true;
        }
    }

    HoveredOver(x1, y1, x2, y2) {

        // Checks if mouse is hovering over:
        //
        //  x1y1______________
        //  |                 |
        //  |       this      |
        //  |_________________x2y2
        //
    
        if (mouseX <= x2 && mouseX >= x1 && mouseY <= y2 && mouseY >= y1) {
            return true;
        }
        else {
            return false;
        }
    }
}
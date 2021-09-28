class Igor {
    constructor(posX, posY, size, hoverSize) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.hoverSize = hoverSize;
        this.halfSize = this.size / 2;

        this.clicked = false;
    }

    draw() {
        this.setSize();
        this.click();
        image(igorImage, this.posX, this.posY, this.size, this.size);
    }

    click() {
        if(this.isHovering()) {
            if (mouseIsPressed && !this.clicked) {
                print("click");
                students.currentStudents += 1;
                this.clicked = true;

                playIgorClick();
                
            }
            if (!mouseIsPressed && this.clicked) {
                this.clicked = false;
            }
        }
    }

    setSize() {
        if (this.isHovering()) this.size = this.hoverSize;
        else this.size = 100;
    }

    isHovering() {
        return (mouseX >= this.posX - this.halfSize &&
                mouseY >= this.posY - this.halfSize &&
                mouseX <= this.posX + this.halfSize &&
                mouseY <= this.posY + this.halfSize);
    }
}
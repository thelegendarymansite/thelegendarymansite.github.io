class HoverButton {
    constructor(posX, posY, sizeX, sizeY, color, hoverColor, rounding) {
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.hoverColor = hoverColor;
        this.rounding = rounding;
        this.halfX = this.sizeX / 2;
        this.halfY = this.sizeY / 2;
    }

    draw() {
        push();
        this.setColor();
        rect(this.posX, this.posY, this.sizeX, this.sizeY, this.rounding);
        pop();
    }

    setColor() {
        if (this.isHovering()) fill(this.hoverColor);
        else fill(this.color);
    }

    isHovering() {
        return (mouseX >= this.posX - this.halfX &&
                mouseY >= this.posY - this.halfY &&
                mouseX <= this.posX + this.halfX &&
                mouseY <= this.posY + this.halfY);
    }
}
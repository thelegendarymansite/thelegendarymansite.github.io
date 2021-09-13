class FlyingIgor {
    constructor() {
        this.posX = random(-width, 0);
        this.posY = random(0, height);
        this.speed = random(10, 20) / 10;
        this.rotation = random(0, 1);
    }

    draw() {

        this.posX += this.speed;
        this.posY += this.speed * (random(-0.5, 0.5));
        push();
        tint(255, 50);
        image(igorSmall, this.posX, this.posY, 32, 32);
        pop();

        if (this.posX >= width) {
            this.speed = random(1, 2);
            this.posY = random(0, height);
            this.posX = -60;
        }
    }
}
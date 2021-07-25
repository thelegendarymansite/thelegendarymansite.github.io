let drops = [];
let splashes = [];
let grass = [];

function setup() {
    createCanvas(600, 600);


    for (let i = 0; i < 200; i++) {
        drops.push(new Drop());
    }

    for (let i = 0; i < 1200; i++) {
        grass.push(new Grass());
    }


}

function draw() {
    background(0);

    fill(0, 255, 100, 40);
    noStroke();
    rect(0, height / 2, width);

    fill(0, 100, 255, 40);
    rect(0, 0, width, height / 2);

    for (let i = drops.length - 1; i >= 0; i--) {
        if (drops[i].pos.y <= drops[i].splashPoint) {
            drops[i].update();
            drops[i].draw();
        } else {
            createSplash(drops[i].pos.x, drops[i].pos.y);

            drops.splice(i, 1);
            drops.push(new Drop());

        }
        
    }

    for (let i = 0; i < grass.length; i++) {
        grass[i].draw();
    }

    if (splashes.length >= 1) {
        for (let i = splashes.length - 1; i >= 0; i--) {
            splashes[i].update();
            splashes[i].draw();
    
            if (splashes[i].finished()) {
                splashes.splice(i, 1);
            }
        }
    }
}

function createSplash(x, y) {
    for (let i = 0; i < 10; i++) {
        splashes.push(new Splash(x, y));
    }
}

class Drop {
    constructor() {
        this.pos = createVector(random(width), random(-height, 0));
        this.vel = createVector(0, map(random(1, 300), 1, 300, 1, 3));
        this.gravity = createVector(0, map(random(1, 200), 1, 200, 0.1, 0.3));
        this.thickness = map(this.gravity.y, 0.1, 0.2, 1, 3);
        this.splashPoint = random(height / 2, height - 50);
    }

    update() {
        this.vel.add(this.gravity);
        this.pos.add(this.vel);
    }

    draw() {
        stroke(0, 100, 255);
        //strokeWeight(this.thickness);
        strokeWeight(map(this.pos.y, 0, this.splashPoint, 1, 3));
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - 20);
    }
}

class Splash {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.normalize();
        this.vel.mult(random(0.1, 2));
        this.alpha = 255;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.x *= 0.995;
        this.vel.y += 0.2;
        this.alpha -= 20;

    }

    finished () {
        return this.alpha <= 0;
    }

    draw() {
        stroke(0, 100, 255, this.alpha);
        strokeWeight(2);
        point(this.pos.x, this.pos.y, 100);
    }
}

class Grass {
    constructor() {
        this.pos = createVector(random(width), random(height / 2, height));
        this.size = random(10, 20);
        this.alpha = random(30, 50);
        this.noiseCounter = random(1000);
    }

    draw() {
        stroke(0, 255, 100, this.alpha);
        strokeWeight(map(this.pos.y, height / 2, height, 1, 3));
        line(this.pos.x, this.pos.y, this.pos.x + map(noise(this.noiseCounter), 0, 1, -10, 10), this.pos.y - this.size);
        this.noiseCounter += 0.01;
    }
}
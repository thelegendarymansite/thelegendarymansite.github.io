class Students {
    constructor() {
        this.currentStudents = 0;
        this.currentStudentsTextSize = width / 20;
        this.numberText = this.currentStudents;
    }

    showCurrentStudents() {

        this.checkNumberSize();

        // number
        push();
        fill(255, 0, 255, 100);
        strokeWeight(2);
        stroke(0);
        textFont(font);
        textSize(this.currentStudentsTextSize);
        text(this.numberText, width / 2, height / 8);
        pop();

        // text
        push();
        fill(255, 0, 255, 100);
        strokeWeight(1);
        stroke(0);
        textFont(font);
        textSize(this.currentStudentsTextSize / 2);
        text("students in the basement", width / 2, height / 5.5);
        pop();
    }

    checkNumberSize() {
        if (this.currentStudents >= 1000 && this.currentStudents < 1000000) {
            this.numberText = round(this.currentStudents / 1000, 3) + "K";
        }
        else if (this.currentStudents >= 1000000 && this.currentStudents < 1000000000) {
            this.numberText = round(this.currentStudents / 1000000, 3) + " million"; 
        }
        else if (this.currentStudents >= 1000000000) { // && this.currentStudents < 999999999999
            this.numberText = round(this.currentStudents / 1000000000, 3) + " billion"; 
        }
        else {
            this.numberText = this.currentStudents;
        }
    }
}
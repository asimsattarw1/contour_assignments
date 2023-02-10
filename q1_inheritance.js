class Shape {
    constructor() {
        this.color = "green"
    }
}

class Circle extends Shape {
    constructor(color, circumference) {
        super(color);
        this.circumference = circumference;
    }

    checkRadius() {
        let rad = (this.circumference) / (this.circumference * Math.PI);
        console.log(rad);
        return rad;
    }
}

let obj = new Circle('red', 7);
obj.checkRadius()
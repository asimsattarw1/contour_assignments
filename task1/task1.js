
triangleObj = {
    name: "Triangle",
    sides: 3,
    length: 4,
}

squareObj = {
    name: "Square",
    sides: 4,
    length: 5,
}


class Shape {
    #name;
    #sides;
    #sideLength;
    constructor({ name, sides, length }) {
        this.#name = name;
        this.#sides = sides;
        this.#sideLength = length;
        this.calcPerimeter();
        this.square();
    }

    calcPerimeter = () => {
        const perimeter = `perimater of ${this.#name} is ${this.#sides * this.#sideLength}`;
        return perimeter
    }

    square = () => {
        const perimeter = `perimater of ${this.#name} is ${this.#sides * this.#sideLength}`;
        return perimeter
    }
}

const shapeObj = new Shape(triangleObj);
console.log(shapeObj.square());


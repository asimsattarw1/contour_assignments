function Car() {
    this.name = '';
    this.make = '';
    this.color = '';
    this.speed = 0;
}
Car.prototype.setName = function () {
    this.name = 'CIVIC';
    return this.name;
}
Car.prototype.setMake = function () {
    this.make = 'Suzuki';
    return this.make;
}
Car.prototype.setColor = function (area) {
    this.color = "black";
    return this.color;
}
Car.prototype.setSpeed = function () {
    this.speed = 190;
    return this.speed;
}

Car.prototype.print = function () {
    return `I am ${this.setName()}, made by ${this.setMake()}, my color is ${this.setColor()}, my speed is ${this.setSpeed()}`;
}

var car = new Car();
console.log(car.print());

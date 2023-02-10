function Human(name, food, shoes) {
    this.name = name;
    this.food = food;
    this.shoes = shoes;
    this.name = `my name is ${name}`
}
Human.prototype.eat = function () {
    this.status = 'i eat mangoes';
    return this;
}

Human.prototype.wear = function () {
    this.shoes = 'jogger';
    return this;
}

Human.prototype.sleep = function () {
    this.sleep = "10am";
    return this;
}

var Human = new Human('Asim', "Khorma", "chapple");
console.log(Human.eat().sleep().wear());;


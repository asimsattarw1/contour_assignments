
let result = 1;
function Calculator(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
}
Calculator.prototype.add = function (n1) {
    result = this.n1 + this.n2;
    return result;
}

Calculator.prototype.minus = function (n) {
    result = result - n;
    return result;
}

Calculator.prototype.multiply = function (n) {
    result = result * n;
    return result;
}

var Calculator = new Calculator(7, 8);
console.log(Calculator.add(4).minus(3).multiply());


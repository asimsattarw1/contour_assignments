function Person(fname, lname,) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.fullName = function () {
    return (`My name is: ${this.fname} ${this.lname}`);
}
console.log(Person.prototype);

let Person1 = new Person('Muhammad Asim', 'Sattar');

console.log(Person1.fullName())

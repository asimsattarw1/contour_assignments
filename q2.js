
class Student {
    constructor(name, rno) {
        this.name = name;
        this.rno = rno;
    }

    show() {
        return (`My name is ${this.name}, my roll number is ${this.rno}`)

    }
}

const studentObj1 = new Student("Sam", 18);
const studentObj2 = new Student("John", 9);

console.log(studentObj1.show());
console.log(studentObj2.show());



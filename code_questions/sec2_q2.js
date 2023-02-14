class Employee {
    constructor(id, name, dept, sal) {
        this.setId(id);
        this.setName(name);
        this.setDept(dept);
        this.setSal(sal);
    }

    // setter functions

    setId(id) {
        this.id = id;
    }

    setName(n) {
        this.name = n;
    }

    setDept(d) {
        this.dept = d;
    }

    setSal(s) {
        this.sal = s;
    }

    // getter functions

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDept() {
        return this.dept;
    }

    getSal() {
        return this.sal;
    }
}

let obj1 = new Employee(1, "Muhammad Asim", "Finance", "40000" );
let obj2 = new Employee(2, "Sattar", "Software", "60000" );
let obj3 = new Employee(3, "Wattoo", "IT", "70000" );

console.log(obj1);
console.log(obj2);
console.log(obj3);

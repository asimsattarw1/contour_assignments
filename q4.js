
class Employee {
    constructor(name, year, salary, address) {
        this.name = name;
        this.year = year;
        this.salary = salary;
        this.address = address;
    }

    show = () => `
    Name: ${this.name}
    Joining year: ${this.year}
    Salary: ${this.salary}
    Address: ${this.address}`
}

const obj = new Employee("Asim", 2023, 70000, "Lahore");
console.log(obj.show());



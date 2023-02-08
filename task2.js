class Employee {
    constructor(salary, hrs) {
        this.salary = parseInt(salary);
        this.hrs = hrs;
    }

    setSalary() {
        this.salary = this.salary;
    }

    setHrs() {
        this.hrs = hrs
    }

    getSalary() {
        return this.salary
    }

    getHrs() {
        return this.hrs
    }

    getInfo() {
        return (`Salary is ${this.salary} and hours are ${this.hrs}`)
    }

    addSalary() {
        if ((this.salary) < 500) {
            return this.salary = this.salary + 10;
        }
    }

    addWork() {
        if ((this.hrs) < 6) {
            return this.salary = this.salary + 5;
        }
    }

}

let obj = new Employee(50, 8);
console.log(obj.addSalary());
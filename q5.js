class Bank {
    #balance
    constructor(name) {
        this.#balance = 50000;
        this.name = name.toLowerCase();
    }
    authorize = () => {
        if (this.name == "ali") {
            return this.#balance
        }
        else {
            return ("You are not authorized");
        }
    }
}

const obj = new Bank("Ali");
console.log(obj.authorize());
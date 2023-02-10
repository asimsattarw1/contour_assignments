class Animal {
    constructor() {
    }
    speak() {
        return ("Parent animal speaks");
    }
}

class Childs extends Animal {
    constructor(speak) {
        super(speak);
    }
    speak() {
        return ("Child animal speaks");
    }

    eat() {
        return ("child eats");
    }

}

let obj1 = new Animal()
let obj2 = new Childs();
console.log(obj1.speak());
console.log(obj2.speak());

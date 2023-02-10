class Animal {
    constructor() {
    }
    speak() {
        return ("Parent animal speaks");
    }
}

class Childs extends Animal {
    constructor() {
        super();
    }
    speak() {
        return ("Child animal speaks");
    }

    invokeParent() {
        return super.speak();
    }

    eat() {
        return ("child eats");
    }

}

let obj = new Childs();
console.log(obj.speak());

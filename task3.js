class Game {
    constructor() {
        this.info();
    }

    info() {
        return (`I Love games and sports`);
    }
}

class Cricket extends Game {
    constructor(info) {
        super(info);
        this.info() = info
    }

    info() {
        return (`I Love Cricket`);
    }
}

class Football extends Game {
    constructor() {
        super(prop);
        this.info();
    }

    info() {
        return (`I Love Footbal`);
    }
}

let obj1 = new Game();
let obj2 = new Cricket();
let obj3= new Football();

console.log(obj2.info());
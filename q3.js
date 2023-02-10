
class Triangle {
    constructor(s1, s2, s3) {
        this.l1 = s1;
        this.l2 = s2;
        this.l3 = s3;
    }
    perimeter = () => this.l1 + this.l2 + this.l3
}

const obj = new Triangle(4, 5, 9);
console.log(obj.perimeter());



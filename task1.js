class Payment {
    constructor(payment) {
        this.payment = payment;
    }

    paymentDetails = () => {
        return (`Payment amount is ${this.payment}`)
    }
}

class CashPayment extends Payment {
    constructor(payment) {
        super(payment)
        this.ptype = "Cash"
    }
    paymentDetails = () => {
        return (`Payment amount is ${this.payment}, payment type is ${this.ptype}`)
    }
}

class CardPayment extends Payment {
    constructor(payment) {
        super(payment)
        this.ptype = "Card"
    }
    paymentDetails = () => {
        return (`Payment amount is ${this.payment}, payment type is ${this.ptype}`)
    }
}

class CreditCards extends CardPayment {
    constructor(prop) {
        super(prop);
        this.expDate = "2030";
        this.cnumber = "12323455"
    }
    paymentDetails = () => {
        return (`Payment amount is ${this.payment}, payment type is ${this.ptype}, card number is ${this.cnumber}, expiry date is ${this.expDate}`)
    }
}

let p1 = new Payment(10000);
let p2 = new Payment(40000);

let obj1 = new CashPayment(40000);
let obj2 = new CashPayment(80000);

let obj3 = new CardPayment(8000);
let obj4 = new CardPayment(3000);

console.log(obj2.paymentDetails());
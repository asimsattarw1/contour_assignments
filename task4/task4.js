
myObj = {
    id: 1,
    title: "M Asim Sattar",
    balance: 40000,
    email: "masimsattarw2@gmail.com"
}

class Bank {
    #accountId;
    #accountTitle;
    #balance;
    #emailID
    constructor({ id, title, balance, email }) {
        this.#accountId = id;
        this.#accountTitle = title;
        this.#balance = balance;
        this.#emailID = email;
        this.withdrawAmount();
        this.depositAmount();
    }

    withdrawAmount = (withdraw) => {
        if (withdraw < this.#balance) {
            return (this.#balance - withdraw)
        }
        else {
            console.log("Withdraw amount is greater than total balance");
        }
    }

    depositAmount = (deposit) => {
        return (this.#balance + deposit)
    }
}

const bankObj = new Bank(myObj);
console.log(bankObj.depositAmount(5000));


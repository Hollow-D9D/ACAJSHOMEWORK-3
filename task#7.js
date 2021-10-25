class Account {
    constructor(id, name, balance) {
        this._id = id;
        this.name = name;
        this.balance = balance;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && 
            accountSecond.name === accountFirst.name && 
            accountFirst.balance === accountSecond.balance)
            return true;
        return false;
    }

    get id() {return this._id}
    
    get name() {return this._name}
    set name(name) {this._name = name}

    get balance() {return this._balance}
    set balance(balance) {this._balance = balance}

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount <= this.balance)
            this.balance -= amount;
        else
            console.log("Amount exceeded balance");
    }

    transferTo(anotherAccount, amount) {
        const tmp = this.balance;
        this.debit(amount);
        if(this.balance != tmp)
        {
            anotherAccount.credit(amount);
            return (this.balance);
        }
    }

    toString() {return `Account #${this.id}
    Name: ${this.name}
    Balance: ${this.balance}`}

}

let first = new Account(1, "Tommy", 3000);
let second = new Account(2, "Tony", 1200);

console.log(Account.identifyAccounts(first, second));
console.log(Account.identifyAccounts(first, first));
// first.transferTo(second, 2000);
console.log(first.transferTo(second, 2000));
console.log(first + "");
// console.log(first.balance);
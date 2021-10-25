class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() {return this._name}
    set name(name) {this._name = name}

    get email() {return this._email}
    set email(email) {this._email = email}

    get gender() {return this._gender}
    set gender(gender) {this._gender = gender}

    toString () {return `Author: ${this.name}
    Email: ${this.email}
    Gender: ${this.gender}`};
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() {return this._title}
    set title(title) {this._title = title}

    get author() {return this._author}
    set author(author) {this._author = author}

    get price() {return this._price}
    set price(price) {this._price = price}

    get quantity() {return this._quantity}
    set quantity(quantity) {this._quantity = quantity}

    getProfit() {return this.price * this.quantity};
    toString () {return `${this.author.toString()}
    Title: ${this.title}
    Price: ${this.price}
    Quantity: ${this.quantity}`};
}

let rowling = new Author("J.K. Rowling", "jkrowling@gmail.com", "female");

let hp = new Book("Harry Potter", rowling, 300, 1000);

let test = hp + '';
let test1 = rowling + '';

console.log(test);
console.log(test1);
console.log(hp.getProfit())
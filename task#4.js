class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    get length() {return this._length}
    set length(length) {this._length = length}
    
    get width() {return this._width}
    set width(width) {this._width = width}

    getPerimeter() {return this._length * 2 + this._width * 2}
    getArea() {return this._width * this._length}

    toString() {return `length: ${this._length} width: ${this._width} area: ${this.getArea()} perimeter: ${this.getPerimeter()}`};
}

let obj = new Rectangle(10, 3)

obj.width = 6;
let str = obj + '';

console.log(str)
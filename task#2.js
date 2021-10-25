const myCall = (fn, thisArg, ...args) => {
    return (fn.apply(thisArg, args));
}

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    myCall(Product, this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
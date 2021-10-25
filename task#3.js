const myBind = (fn, thisArg, ...args) => (...arg) =>  fn.apply(thisArg, [...args, ...arg]);

const modules = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = modules.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined

  const boundGetX = myBind(unboundGetX, modules);
  console.log(boundGetX());
  // expected output: 42
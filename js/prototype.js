let functionPrototype = {
  // return function()
};

function factoryFunction(firstName, lastName) {
  return {
    firstName,
    lastName,
    greet: function () {
      console.log("Hello " + this.firstName);
    },
  };
}

let basu = factoryFunction("Basu", "Dev");

let murari = factoryFunction("Murari", "Adhikari");

console.log(basu.greet());
console.log(murari.greet());
console.log(basu.greet == murari.greet);

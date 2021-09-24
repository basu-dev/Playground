let functionPrototype = {
  // return function()
};

function factoryFunction(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
factoryFunction.prototype.greet = function () {
  return this.firstName + " " + this.lastName;
};

let basu = new factoryFunction("Basu", "Dev");

let murari = new factoryFunction("Murari", "Adhikari");

console.log(basu.greet());
console.log(murari.greet());
console.log(basu.greet == murari.greet);

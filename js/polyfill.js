let name = {
  firstName: "Basu",
  lastName: "Adhikari",
};

let printName = function (town, city, valley) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from  " +
      town +
      " " +
      city +
      valley
  );
};

Function.prototype.myBind = function (obj, ...place) {
  let context = this;
  return function (...args) {
    context.apply(obj, [...place, ...args]);
  };
};

printName = printName.myBind(name, "Pokhara");
printName("Kathmandu", "Valley");

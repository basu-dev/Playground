/** function currying means getting specific funcitons from generic functions */
var a = 5;
// Lets take a first Example
function intro(firstName, lastName, city) {
  console.log(firstName + " " + lastName + " lives in " + city);
}

// Closure Method
let adhikarisIntro = function (firstName, city) {
  const lastName = "Adhikari";
  return intro.call(this, firstName, lastName, city);
};
adhikarisIntro("Basu", "Kathmandu");

// Bind Method
let ramIntro = intro.bind(this, "Ram");
ramIntro("Sherpa", "Pokhara");

// Lets Take Second Example
function log(message, type) {
  switch (type) {
    case "normal":
      console.log(message);
      break;
    case "warn":
      console.warn(message);
      break;
    case "danger":
      console.error(message);
      break;
    default:
      console.log(message);
  }
}
let logWarn = function (message) {
  return log.call(this, message, "warn");
};

logWarn("hello");

// Lets Take Third Example

// These two cube and square come under currying

let square = function (a) {
  return multiplier.call(this, a, a);
};

let cube = function (a) {
  return multiplier(multiplier.call(this, a, a), a);
};

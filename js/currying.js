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
function multiplier(a, b) {
  return a * b;
}

// These two cube and square come under currying

let square = function (a) {
  return multiplier.call(this, a, a);
};

let cube = function (a) {
  return multiplier(multiplier.call(this, a, a), a);
};

/// This below methods come under recursion
let power = (a, powerNumber) => {
  result = 1;
  /*Create a closure*/
  function start(powerNumber) {
    /*First We define the return case*/
    if (powerNumber == 0) return result;

    /* We Perform the logic*/
    result = multiplier(result, a);

    /*We call the same function and return it*/
    return start(--powerNumber);
  }
  let final = start(powerNumber);
  return final;
};

/// This below function is similar to memoize which caches results to give fast results.

function superPower() {
  obj = {};
  return function (a, b) {
    let key = a.toString() + "+" + b.toString();
    if (key in obj) {
      return obj[key];
    }
    let res = power(a, b);
    obj[key] = res;
    return res;
  };
}

let spower = superPower();
let index = 1000;

console.time();

while (index > 0) {
  power(150, 150);
  index--;
}

console.timeEnd();

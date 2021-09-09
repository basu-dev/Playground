// This function will print all 5 in stead of 1 4, 8
function x() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i, "from 1"), i * 1000);
  }
}
// x();

function y() {
  for (var i = 0; i < 5; i++) {
    function close(a) {
      setTimeout(() => console.log(a, "from 2"), a * 1000);
    }
    close(i);
  }
}
// y();

function z() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i, "from 1"), i * 1000);
  }
}
// z();

function x() {
  let counter = 0;
  return {
    adder() {
      console.log(++counter);
    },
    substracter() {
      console.log(--counter);
    },
  };
}

let counter = x();
counter.adder();
counter.adder();
counter.substracter();

function multiplier(a, b) {
  return a * b;
}
/// This below methods come under recursion with closure
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
  spower(150, 150);
  index--;
}

console.timeEnd();

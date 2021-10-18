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

/*
let counter = x();
counter.adder();
counter.adder();
counter.substracter();
*/

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
function superPower(fn) {
  let cache = {};
  return function (a, b) {
    let key = a * b + (a - b) + 1000000;
    if (key in cache) {
      return cache[key];
    }

    let res = power(a, b);
    cache[key] = res;
    return res;
  };
}

let spower = superPower();
let index = 50_000;
let itemCount = index;

sResult = [];
results = [];
console.time();

while (index > 0) {
  let random1 = Math.floor(Math.random() * 1000);
  let random2 = Math.floor(Math.random() * 100);
  sResult.push(spower(random1, random2));
  results.push(power(random1, random2));
  index--;
}

console.timeEnd();

for (let i = 0; i < itemCount; i++) {
  if (!!(sResult[i] - result[i])) {
    console.log(i, " not same value");
  }
}

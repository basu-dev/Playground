function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    } else {
      return sum(a + b);
    }
  };
}

console.log(sum(1)(2)(1000)(4)(5)());

function Counter() {
  let count = 0;
  this.increment = function () {
    return ++count;
  };
  this.decrement = function () {
    return --count;
  };
}

let counter1 = new Counter();
let counter2 = new Counter();

console.log(counter1.increment == counter2.increment);

console.log(counter1.increment());

console.log(counter2.increment());
console.log(counter1.increment());

console.log(counter1.decrement());

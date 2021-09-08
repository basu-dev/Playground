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

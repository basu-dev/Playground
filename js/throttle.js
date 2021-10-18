"use strict";
/** Throttle means call function in certain Interval */
let inputField = document.querySelector("input");

function fetchApi(str, from) {
  console.log(`Fetching for ${str} `);
}

const throttle1 = (function (delay) {
  var timer;
  var call = false;

  return function (cb) {
    if (timer) clearTimeout(timer);
    let interval;
    if (!call)
      interval = setInterval(() => {
        if (call) {
          cb();
        } else {
          clearInterval(interval);
        }
      }, delay);
    call = true;

    timer = setTimeout(() => {
      call = false;
    }, delay);
  };
})(1000);

function throttle2(cb, delay) {
  call = true;
  first = true;
  return function fn() {
    let context = this;
    let args = arguments;
    if (call) {
      if (first) {
        cb.apply(context, args);
        first = false;
      }
      call = false;
      setTimeout(() => {
        cb.apply(context, args), (call = true);
      }, 300);
    }
  };
}

// inputField.addEventListener(
//   "keyup",
//   throttle2((event) => fetchApi(event.target.value, "2"), 300)
// );

const throttle5 = (function (delay) {
  let startTimer = true;
  let firstPress = true;
  return function (cb) {
    if (firstPress) {
      firstPress = false;
      return cb();
    }
    if (startTimer) {
      console.log(firstPress);
      startTimer = false;
      setTimeout(() => {
        cb();
        startTimer = true;
      }, delay);
    }
  };
})(1000);

inputField.addEventListener("keyup", (e) =>
  throttle5(() => fetchApi(e.target.value, "1"))
);

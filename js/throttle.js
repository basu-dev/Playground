/** Throttle means call function in certain Interval */
let inputField = document.querySelector("input");

function fetchApi(str, from) {
  console.log(`Fetching for ${str} from ${from}`);
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

const throttle3 = (function (interval) {
  let call = true;
  let first = true;
  return function (cb) {
    if (call) {
      if (first) {
        first = false;
        return cb();
      }
      call = false;
      setTimeout(() => {
        cb();
        call = true;
      }, interval);
    }
  };
})(1000);

inputField.addEventListener("keyup", (e) =>
  throttle3(() => fetchApi(e.target.value, "1"))
);

inputField.addEventListener(
  "keyup",
  throttle2((event) => fetchApi(event.target.value, "2"), 300)
);

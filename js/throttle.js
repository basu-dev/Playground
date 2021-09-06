/** Throttle means call function in certain Interval */
function callApi(text) {
  console.log(text);
}

let input = document.querySelector("input");
input.addEventListener(
  "keyup",
  throttle((event) => callApi(event.target.value), 300)
);

function throttle(cb, delay) {
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
      }, 1000);
    }
  };
}

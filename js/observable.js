function Observable(_observer) {
  this.subscribe = function (_n, _e, _c) {};
}

new Observable((next, error, _complete) => {
  let i = 0;
  setInterval(() => {
    if (i > 9) {
      error("Value cannot be greater than 9");
    }
    next(++i);
  }, 1000);
}).subscribe(
  (a) => console.log("success", a),
  (b) => console.log("error", b),
  (c) => console.log("complete", c)
);

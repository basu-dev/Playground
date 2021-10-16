function Observable(observer) {
  this.subscribe = function (next, error, complete) {
    observer(next, error, complete);
  };
  this.map = function (cb) {
    return new Observable(observer);
  };
}

new Observable((next, error, _complete) => {
  let i = 0;
  let interval = setInterval(() => {
    if (i > 10) {
      _complete(i);
      clearInterval(interval);
    } else {
      if (i > 5) {
        error("Value cannot be greater than 9");
      } else {
        next(i);
      }
    }
    i++;
  }, 1000);
})
  .map((x) => x + 1)
  .subscribe(
    (a) => console.log("success", a),
    (b) => console.log("error", b),
    (c) => console.log("complete", c)
  );

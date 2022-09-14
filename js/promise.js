var Promise3 = (function () {
  function Promise3(fn) {
    let self = this;
    queueMicrotask(function () {
      self.constructor(fn);
    });
  }

  Promise3.prototype.constructor = function (fn) {
    let self = this;
    fn(
      function (value) {
        self.thenFn(value);
      },
      function (value) {
        self.catchFn(value);
      }
    );
  };
  Promise3.prototype.finallyFn = function () {
    this.thenFn = () => {};
    this.catchFn = () => {};
  };

  Promise3.prototype.catchFn = function () {
    this.finallyFn();
  };

  Promise3.prototype.then = function (fn) {
    this.thenFn = function (value) {
      fn(value);
      this.finallyFn();
    };
    return this;
  };

  Promise3.prototype.catch = function (fn) {
    this.catchFn = function (value) {
      fn(value);
      this.finallyFn();
    };
    return this;
  };

  Promise3.prototype.finally = function (fn) {
    this.finallyFn = function () {
      fn();
      this.thenFn = function () {};
      this.catchFn = function () {};
    };
    return this;
  };
  return Promise3;
})();

class Promise2 {
  thenFn = () => this.finallyFn();
  catchFn = () => this.finallyFn();

  constructor(fn) {
    queueMicrotask(() => {
      fn(
        (value) => this.thenFn(value),
        (value) => this.catchFn(value)
      );
    });
  }

  then(fn) {
    this.thenFn = (value) => {
      fn(value);
      this.finallyFn();
    };
    return this;
  }

  catch(fn) {
    this.catchFn = (value) => {
      fn(value);
      this.finallyFn();
    };
    return this;
  }

  finally(fn) {
    this.finallyFn = () => {
      fn();
      this.thenFn = () => {};
      this.catchFn = () => {};
    };
    return this;
  }
}

(function A() {
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 500);
  });

  a.finally(() => console.log("Done"))
    .then(console.log)
    .catch(console.error);
})();

function MyPromise(promise) {
  this.promise = promise;
  this.promiseCalled = false;
}

MyPromise.prototype = {
  promiseCall: function promiseCall() {
    if (this.promiseCalled) return;
    this.promiseCalled = true;
    this.promise(
      (val) => {
        if (this.thenCallback) this.thenCallback(val);
      },
      (err) => {
        if (this.errorCallback) this.errorCallback(err);
      }
    );
  },

  then: function (cb) {
    this.thenCallback = cb;
    this.promiseCall.call(this);
    return this;
  },

  catch: function (cb) {
    this.errorCallback = cb;
    this.promiseCall.call(this);
    return this;
  },
};

function MyPromise2(promise) {
  let promiseInvoked = false;
  function invocePromise() {
    if (promiseInvoked) return;
    promiseInvoked = true;
    promise(
      (data) => {
        if (this.thenCallback) this.thenCallback(data);
      },
      (err) => {
        if (this.errorCallback) this.errorCallback(err);
      }
    );
  }

  this.then = function (cb) {
    this.thenCallback = cb;
    invocePromise.call(this);
    return this;
  };
  this.catch = function (cb) {
    this.errorCallback = cb;
    invocePromise.call(this);
    return this;
  };
}

function getData() {
  return new MyPromise2((resolve, reject) => {
    setTimeout(function () {
      let data = Math.ceil(Math.random() * 10);
      if (data > 5) {
        resolve({ success: true, data });
      } else {
        reject({ error: true, data });
      }
    }, 100);
  });
}

let a = getData().catch(console.warn).then(console.log);

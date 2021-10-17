class MyPromise {
  constructor(promise) {
    this.promise = promise;
    this.promiseCalled = false;
  }
  promiseCall() {
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
  }
  then(cb) {
    this.thenCallback = cb;
    this.promiseCall.call(this);
    return this;
  }
  catch(cb) {
    this.errorCallback = cb;
    this.promiseCall.call(this);
    return this;
  }
}

function MyPromise2(promise) {
  let promiseInvoked = false;
  let thenCallback, errorCallback;

  function invokePromise() {
    if (promiseInvoked) return;
    promiseInvoked = true;
    promise(
      (data) => {
        if (thenCallback) thenCallback(data);
      },
      (err) => {
        if (errorCallback) errorCallback(err);
      }
    );
  }

  const then = function (cb) {
    thenCallback = cb;
    invokePromise.call(this);
    return this;
  };
  const catc = function (cb) {
    errorCallback = cb;
    invokePromise.call(this);
    return this;
  };
  return {
    then,
    catc,
  };
}

function getData() {
  return new MyPromise((resolve, reject) => {
    setTimeout(function () {
      let data = Math.ceil(Math.random() * 10);
      if (data >= 5) {
        resolve({ success: true, data });
      } else {
        reject({ error: true, data });
      }
    }, 100);
  });
}

getData().catch(console.warn).then(console.log);

function Subject() {
  let callBacks = [];

  this.subscribe = function (cb) {
    callBacks.push(cb);
    return {
      unsubscribe: function unsubscribe() {
        callBacks = callBacks.filter((data) => data != cb);
      },
    };
  };

  this.next = function (value) {
    callBacks.forEach((fn) => fn(value));
  };
}

// let a = new Subject();

// a.subscribe((a) => console.log("value", a));

// let b = new Subject();
// a.next("bac");

function BehaviorSubject(initialValue) {
  let callBacks = [];
  let currentValue = initialValue;

  this.subscribe = function (cb) {
    callBacks.push(cb);
    cb(currentValue, currentValue);
    return {
      unsubscribe: function unsubscribe() {
        callBacks = callBacks.filter((data) => data != cb);
      },
    };
  };

  this.next = function (value) {
    callBacks.forEach((cb) => cb(value, currentValue));
    currentValue = value;
  };
}

let a = new BehaviorSubject(1);
a.next(2);

a.subscribe((value) => console.log("first subscription", value));
let subscription2 = a.subscribe((value, prev) =>
  console.log("second subscription", value, prev)
);
// subscription2.unsubscribe();
a.next(3);

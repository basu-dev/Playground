function Subject() {
  let callBacks = [];
  return {
    subscribe: (cb) => {
      return {
        unsubscribe: function () {
          callBacks = callBacks.filter((fn) => fn != cb);
        },
      };
    },
    next: function (value) {
      callBacks.forEach(function (cb) {
        cb(value);
      });
    },
  };
}

let sub = Subject();

// sub.subscribe((value) => console.log(this, value));

let i = 0;
setInterval(() => sub.next(++i), 1000);

class MyClass {
  constructor() {
    sub.subscribe(function (value) {
      console.log("from ", this);
    });
  }
  hello() {}
}

class SecondClass {
  constructor() {
    sub.subscribe((value) => this.hello());
  }
}
let classOBj = new MyClass();

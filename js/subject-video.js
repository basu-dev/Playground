/* Serivce */
// import { Subject } from "./subject.js";

function Subject() {
  let callBacks = [];
  return {
    next: function (value) {
      callBacks.forEach((cb) => cb(value));
    },
    subscribe: function (cb) {
      callBacks.push(cb);

      return {
        unsubscribe: function () {
          callBacks = callBacks.filter((fn) => fn != cb);
        },
      };
    },
  };
}

let timerSub = new Subject();

console.log(timerSub);
/* One component */

let sub1 = timerSub.subscribe((value) =>
  console.log("From first Component", value)
);
setTimeout(() => sub1.unsubscribe(), 5000);

/* Other component */

let i = 0;
setInterval(() => timerSub.next(++i), 1000);

/* 3rd component */

let sub2 = timerSub.subscribe((value) =>
  console.log("From third component", value)
);

setTimeout(() => sub2.unsubscribe(), 3000);

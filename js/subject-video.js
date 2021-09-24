/* Serivce */
// import { Subject } from "./subject.js";

function Subject() {
  this.callBacks = [];

  Subject.prototype.next = function Next(value) {
    this.callBacks.forEach((cb) => cb(value));
  };

  Subject.prototype.subscribe = function Subscribe(cb) {
    this.callBacks.push(cb);
    let ctx = this;
    let unsubscribe = function () {
      ctx.callBacks = ctx.callBacks.filter((fn) => fn != cb);
    };
    return { unsubscribe };
  };
}

let timerSub = new Subject();
console.log(timerSub);

let secondSub = new Subject();

let sub = timerSub.subscribe((val) => console.log("hello from TimerSub", val));
console.log(sub);

let sub2 = secondSub.subscribe(() => console.log("hello from SEocndsub"));

let interval;
(function () {
  let a = 1;
  timerSub.next(++a);
  // let a = 0;
  // interval = setInterval(() => {
  // }, 5000);
})();
// console.log(sub.unsubscribe == sub2.unsubscribe);
setTimeout(() => sub.unsubscribe(), 1000);

class Subject1 {
  callBacks = [];

  next(value) {
    this.callBacks.forEach((cb) => cb(value));
  }

  subscribe(cb) {
    this.callBacks.push(cb);
    let ctx = this;
    let unsubscribe = function () {
      ctx.callBacks = ctx.callBacks.filter((fn) => fn != cb);
    };
    return { unsubscribe };
  }
}

let a = new Subject1();
let b = new Subject1();
console.log(a);
a.subscribe((a) => console.log(a));

a.next(5_0_0);

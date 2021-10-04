/* We have object and we want to */
let obj = { a: 3 };

Object.defineProperty(obj, "a", {
  set: function (a) {
    obj["a"] = a;
    console.log(a);
  },
});
// Object.seal(obj);
// delete obj.a;
obj.a = 5;
console.log(obj);

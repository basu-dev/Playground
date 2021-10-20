"use strict";
/**
 * 1. Object.preventExtensions
 * Can delete property, change property value & property accessor attributes
 * but cannot add new property
 *
 * 2. Object.seal
 * Only can change value of property not other
 *
 * 3. Object.seal
 * Cannot perform any further actions
 *
 * 4. Object.create
 * Create new object and add its prototype object
 *
 * 5. Object.assign
 * Add two or more objects together ( like spread operator )
 *
 * 6. Object.defineProperty has two groups ( Value Attribute Group with value, writable, configurable & enumerable )
 * (Accessor Attribute Group has get,set,enumerable & configurable)
 */

let a = { class: 10 };

let b = Object.create(a);
b.name = "seven";
console.log(b.name, b.class);

let greet = {
  intro() {
    console.log("I am " + this.name);
  },
};

let human = Object.create(greet, {});
let robot = Object.create(greet, { name: { value: "Robot" } });
robot.intro();
Object.defineProperties(human, {
  name: {
    enumerable: false,
    configurable: false,
    get: function () {
      return this.value;
    },
    set: function (_value) {
      this.value = _value;
    },
  },
  rollNo: {
    value: 5,
    writable: true,
    configurable: false,
    enumerable: true,
  },
});
human = { ...human, age: 10 };
human.name = "Basu";

console.log(human.name);
// Object.seal(human);
console.log(Object.isExtensible(human));
Object.defineProperty(human, "age", {
  writable: false,
  configurable: true,
});
// human.age = 5;
console.log(human);

let parent = {
  sayHi() {
    console.log("Hi from " + this.name);
  },
};
/* anothe alternative to Object.create*/
let child = { name: "Basu" };
child.__proto__ = parent;
console.log(child);

/* another alternative to Object.assign with ES6*/

let anotherChild = { ...parent, ...child };
console.log(anotherChild);

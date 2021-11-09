function* idGenerator() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

let gen = idGenerator();

let id1 = gen.next().value;

console.log(id1);

console.log(gen.next().value);

/* Array has for...of loop because Array retrun an iterator object*/

let arr = [10, 20, 30];

arr["newKey"] =
  "newValue"; /* Since Array is an Object we can add new key value pair to it.*/

for (let item of arr) {
  console.log(item); /* logs.. 10, 20,30*/
  /* here 'newValue' doesn't show up*/
}

/* for...in loop retursn all the properties ( keys ) available in an object if we see it for Array*/
for (let key in arr) {
  console.log(key); /* logs.. 0, 1, 2, 'newKey'*/
  /* Here 'newkey' shows up*/
}

function a() {
  console.log(50 * 30);
}

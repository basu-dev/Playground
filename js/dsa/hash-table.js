export class HashMap {
  #hashingFunction(key, arrayLength) {
    let index = 3;
    for (let i = 0; i < key.length; i++) {
      index += index * key[0].charCodeAt(0);
    }
    return index % arrayLength;
  }

  constructor(arrayLength) {
    this.array = new Array(arrayLength);
  }

  get(key) {
    let index = this.#hashingFunction(key, this.array.length);
    return this.array[index].find((item) => item[0] == key)[1];
  }

  set(key, value) {
    let index = this.#hashingFunction(key, this.array.length);
    if (this.array[index]) {
      this.array[index].push([key, value]);
    } else {
      this.array[index] = [[key, value]];
    }
  }

  get keys() {
    let keys = [];
    this.array.forEach((item) => {
      if (item) {
        if (item.length) {
          item.forEach((i) => keys.push(i[0]));
        }
      }
    });
    return keys;
  }

  get entries() {
    let entries = [];
    this.array.forEach((item) => {
      if (item) {
        if (item.length) {
          item.forEach((i) => entries.push(i));
        }
      }
    });
    return entries;
  }

  get values() {
    let values = [];
    this.array.forEach((item) => {
      if (item) {
        if (item.length) {
          item.forEach((i) => values.push(i[1]));
        }
      }
    });
    return values;
  }
}

let map = new HashMap(10);

map.set("Name", "Basu Dev");

map.set("Roll No", 5);
console.log(map.keys);
console.log(map.values);
console.log(map.entries);

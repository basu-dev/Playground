function factorial(num) {
  console.log("called", num);
  let res = 1;
  while (num > 1) {
    res *= num;
    num--;
  }
  return res;
}

const useCallback = (fn, args) => {
  let store = new Map();

  return () => {
    // let storedValue = store.get(args);
    // if (storedValue) return storedValue;
    let res = fn();
    console.log(res);
    store.set(args, res);
    return res;
  };
};

console.time("start");
let a = 10000000;
let cachedCb = useCallback((value) => factorial(value), value);
console.log(cachedCb(a));

console.timeEnd("start");

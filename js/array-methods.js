let a = [3, 5, 7];
/** Mutating Array Methods
 * 1. Splice
 * 2. Sort
 * 3. Reverse
 * 4. push, pop, unshift, shift
 *
 * Non Mutating Array Methods
 * 1. Slice
 * 2. Map, Reduce, filter
 * 3. concat
 * 4. FlatMap, Flat
 */
let ArrayMethods;

let log = console.log;
// let b = a.slice(-2);
// let c = a.splice(-2, 1);
// log(b);
// log(c);
log(a);
// let c = a.splice(1, 3);
let x = a.unshift(10);
log(a.sort((a, b) => b - a));

log(a);

log(a.some((x) => x == 10));
log(a.reverse());
log(a.shift(3));
a.concat([12, 12, 15]);
let y = [12, 12, 12].copyWithin(a, 0);
log(y);

log(a);
a.push([12, 13]);
let m = a.flat(1);
log(m);
log(a);
log(m.join(":"));
log(a);

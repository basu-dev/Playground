/* Var is function scope, so  any variable 
outside a function is exposed to the global scope.
*/
(function hello() {
  var a = 5;
  console.log(a);
})();

/* the below code functions exactly same as above
 and the variabe a is not exposed to global
 context since `let` is block scope*/

{
  let a = 5;
  console.log(a);
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j));
  })(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
}

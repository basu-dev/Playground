/** function currying means getting specific funcitons from generic functions */

function intro(firstName, lastName, city) {
  console.log(firstName + " " + lastName + " lives in " + city);
}

// Closure Method
let adhikarisIntro = function (firstName, city) {
  const lastName = "Adhikari";
  return intro.call(this, firstName, lastName, city);
};
adhikarisIntro("Basu", "Kathmandu");

// Bind Method
let ramIntro = intro.bind(this, "Ram");
ramIntro("Sherpa", "Pokhara");

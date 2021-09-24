let employee = {
  id: 1,
  name: {
    firstName: "Basu",
    lastName: "Adhikari",
  },
  location: {
    country: "Nepal",
    city: "Kathmandu",
  },
  contact: {
    phoneNo: 98989898,
    email: {
      personalEmail: "adbasudev54@gmail.com",
      officeEmail: "basu@officemail.com",
    },
  },
};
/** Expected output from
 * employee_id:1,
 * employee_name_firstName:"Basu",
 * employee_name_lastName:"Adhikari"
 * employee_location_country:"Nepal"
 *
 * ...
 * and so on
 */
function recursive(obj, parent, res) {
  for (key in obj) {
    if (obj[key] instanceof Object) {
      recursive(obj[key], parent + "_" + key, res);
    } else {
      res[parent + "_" + key] = obj[key];
    }
  }
  //   console.log(simple);
  return res;
}

console.log(recursive(employee, "employee", {}));

/*
Input : A = {1, 2, 3, 4, 5}
Output 1.: [[48]
         [20, 28], 
         [8, 12, 16] ,
         [3, 5, 7, 9] ,
         [1, 2, 3, 4, 5] ]

Output 2: 48
            20,28
            8,12,16
            and so on
*/

let a = [1, 2, 3, 4, 5];

let result = [a];
function create(arr) {
  if (arr.length == 0) return;
  secArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    secArr.push(arr[i] + arr[i + 1]);
  }
  result.push(secArr);
  create(secArr);
}
create(a);

console.log(result.reverse());

function result2() {}

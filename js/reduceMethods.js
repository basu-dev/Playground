let students = [
  {
    name: "Basu",
    faculty: "BEX",
  },
  {
    name: "Dev",
    faculty: "BEX",
  },
  {
    name: "C",
    faculty: "BCE",
  },
  {
    name: "D",
    faculty: "BCT",
  },
  {
    name: "E",
    faculty: "BCT",
  },
];

let res = students
  .map((stu) => {
    return { ...stu, faculty: stu.faculty.toLowerCase() };
  })
  .reduce((acc, cur) => {
    if (cur.faculty in acc) {
      acc[cur.faculty].push(cur.name);
    } else {
      acc[cur.faculty] = [cur.name];
    }
    return acc;
  }, {});

console.log(res);

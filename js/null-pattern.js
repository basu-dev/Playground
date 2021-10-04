class User {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  bio() {
    console.log(`My name is ${this.name} and my roll No is ${this.rollNo}`);
  }
}
class NullUser extends User {
  constructor() {
    super("Default Username", -1);
  }
}

let users = [new User("Basu Dev", 3), new User("Adhikari", 5)];

function getUserById(id) {
  let user = users.find((user) => user.rollNo == id);
  if (!user) return new NullUser();
  return user;
}

function greetUser(id) {
  let user = getUserById(id).bio();
}

greetUser(3);

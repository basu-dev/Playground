function BehaviorSubject(initialValue) {
  let callBacks = [];

  return {
    subscribe: function (cb) {
      callBacks.push(cb);
      cb(initialValue, initialValue);
      return {
        unsubscribe: function () {
          callBacks = callBacks.filter((fn) => fn != cb);
        },
      };
    },
    next: function (value) {
      callBacks.forEach((cb) => cb(value, initialValue));

      initialValue = value;
    },
  };
}

let i = 0;
let sub = new BehaviorSubject(++i);

// setInterval(() => sub.next(++i), 1000);
sub.next(5);

function login() {
  sub.next({
    name: "Basu",
    token: "Bearer azweretywerwe",
  });
}

function logout() {
  sub.next({});
}
login();

/*app*/
sub.subscribe((value, prev) => {
  console.log(value.token);
  if (value.token) {
    console.log("logged In");
  } else {
    alert("Redirect to login");
  }
});

setTimeout(logout, 5000);

setTimeout(login, 10000);

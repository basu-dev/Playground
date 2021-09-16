function Subject() {
  let callBacks = [];
  return {
    subscribe: (cb) => {
      callBacks.push(cb);
      return {
        unsubscribe: function () {
          callBacks = callBacks.filter((fn) => fn != cb);
        },
      };
    },
    next: function (value) {
      callBacks.forEach(function (cb) {
        cb(value);
      });
    },
  };
}

function Injector() {
  let functionName = this.__proto__.constructor;
  let instance = this;
  let instances = new Map();
  instances[functionName] = instance;

  window.ins = this;

  this.get = function (type) {
    if (type in instances) {
      console.log(instances);
      return instances[type];
    }
    let instance = new type();
    instances[type] = instance;
    return instance;
  };
}

class DataService {
  userSub$ = new Subject();
}

class AppComponent {
  dataService;
  injector;
  constructor(injector) {
    this.injector = injector;
    this.dataService = this.injector.get(DataService);
  }
  a = 3;

  userSub;

  increment() {
    console.log(++this.a);
  }

  onInit() {
    this.userSub = this.dataService.userSub$.subscribe((a) => this.increment());
    setTimeout(() => this.userSub.unsubscribe(), 5000);
  }
}

class SecondComponent {
  i = 0;
  dataService;
  constructor(dataService) {
    this.dataService = dataService;
  }
  onInit() {
    setInterval(() => this.dataService.userSub$.next(++this.i), 1000);
  }
}

/* This below code is all done by frameword when main.ts run */
let injector = new Injector();

let appComponent = new AppComponent(injector.get(Injector));
let secondComponent = new SecondComponent(injector.get(DataService));

appComponent.onInit();
secondComponent.onInit();

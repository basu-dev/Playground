import { Subject } from "./subject.js";
import { Injector } from "./angular-injector.js";

class DataService {
  dataSub$ = new Subject();
}

class AppComponent {
  constructor(injector) {
    this.injector = injector;
    this.dataService = this.injector.get(DataService);
  }

  a = 0;
  subscription;

  increment() {
    console.log(`%c From AppComponent ${++this.a}`, "color:red");
  }

  ngOnInit() {
    this.subscription = this.dataService.dataSub$.subscribe((_) =>
      this.increment()
    );
    setTimeout(() => this.subscription.unsubscribe(), 10000);
  }
}

class SecondComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    setInterval(() => this.dataService.dataSub$.next(), 1000);
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/* This below code is all added by framework during `Complie Time` */
let injector = new Injector();

AppComponent.fac = function AppComponent_Factory() {
  return new AppComponent(injector.get(Injector));
};

SecondComponent.fac = function SecondComponent_Factory() {
  return new SecondComponent(injector.get(DataService));
};

const appComp = AppComponent.fac();
const secComp = SecondComponent.fac();

appComp.ngOnInit();
secComp.ngOnInit();

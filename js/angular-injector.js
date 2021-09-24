export function Injector() {
  let functionName = this.__proto__.constructor;
  let instance = this;
  let instances = new Map();
  instances[functionName] = instance;

  this.get = function (type) {
    if (type in instances) {
      return instances[type];
    }
    let instance = new type();
    instances[type] = instance;
    return instance;
  };
}

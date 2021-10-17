function $(selector) {
  let element;
  console.log(typeof selector);
  if (selector instanceof HTMLElement) {
    element = selector;
    console.log(selector);
  } else {
    console.log(selector);
    element = document.querySelector(selector);
  }
  return {
    html: function (body) {
      if (body) element.innerHTML = body;
      else {
        return element.innerHTML;
      }
      return this;
    },
    css: function (firstParam, secondParam) {
      if (typeof firstParam === "string") {
        element.style[firstParam] = secondParam;
      } else if (typeof firstParam == "object") {
        for (let key of Object.keys(firstParam)) {
          element.style[key] = firstParam[key];
        }
      }
      return this;
    },
    on: function (eventType, cb) {
      element.addEventListener(eventType, cb);
      return this;
    },
    toggleClass: function (className) {
      element.classList.toggle(className);
      return this;
    },
  };
}

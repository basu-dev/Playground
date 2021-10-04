(function () {
  function $(selector) {
    if (this instanceof $) {
      if (selector instanceof HTMLElement || selector instanceof HTMLDocument) {
        this.elements = [selector];
      } else {
        this.elements = document.querySelectorAll(selector);
      }
    } else {
      return new $(selector);
    }
  }

  $.prototype = {
    ready: function (cb) {
      this.on("DOMContentLoaded", cb);
    },
    forAll: function (cb) {
      this.elements.forEach(cb);
    },
    html: function (body) {
      if (!body) return this.element.innerHTML;
      this.forAll((el) => (el.innerHTML = body));
      return this;
    },
    css: function (firstValue, secondValue) {
      if (firstValue instanceof Object) {
        for (let key of Object.keys(firstValue)) {
          this.forAll((el) => (el.style[key] = firstValue[key]));
        }
      } else {
        this.forAll((el) => (el.style[firstValue] = secondValue));
      }
      return this;
    },
    on: function (type, cb) {
      this.forAll((el) => el.addEventListener(type, cb.bind(el)));
      return this;
    },
    toggleClass: function (className) {
      this.forAll((el) => el.classList.toggle(className));
      return this;
    },
    toggleAttribute: function (attr) {
      this.forAll((el) => el.toggleAttribute(attr));
      return this;
    },
    attr: function (key, value) {
      if (key && !value) return this.elements[0].getAttribute(key);
      else this.forAll((el) => el.setAttribute(key, value));
      return this;
    },
    remove: function () {
      this.forAll((el) => el.remove());
    },
    find: function (selector) {
      return this.elements[0].querySelector(selector);
    },
    findAll: function (selector) {
      return this.elements[0].querySelectorAll(selector);
    },
  };
  window.$ = $;
})();

$(document).ready(function () {
  let text = "Never Clicked";
  let b = $(".btn")
    .html(`<b>${text}</b>`)
    .css({
      color: "white",
      letterSpacing: "1px",
      textTransform: "uppercase",
      backgroundColor: "blue",
      padding: "1rem",
    })
    .css("border-radius", "20px")
    .on("click", function (e) {
      $(this).toggleClass("white").toggleAttribute("is-white").html("Clicked");
      console.log(this);
    })
    .find("b");
});

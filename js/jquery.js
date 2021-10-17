"use strict";
(function () {
  function $(selector) {
    if (this instanceof $) {
      if (selector instanceof HTMLElement || selector instanceof Document) {
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
      if (!body) return this.elements[0].innerHTML;
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
      return this;
    },
    removeChildren: function () {
      for (let element of this.elements[0].children) {
        element.remove();
      }
      return this;
    },
    find: function (selector) {
      return this.elements[0].querySelector(selector);
    },
    findAll: function (selector) {
      return this.elements[0].querySelectorAll(selector);
    },
  };

  if (!window.$) {
    window.$ = $;
  } else {
    let spacer = "\n\n=========================\n";
    let thinSpacer = "\n------------------------\n";
    console.warn(
      `You already have another library using $ as functionName. It may conflict with your existing code.` +
        `.So you can use 'jQuery' as functionName instead. ${spacer}` +
        `Eg.jQuery('body').html().\n\nOr do ${thinSpacer}` +
        `let J = jQuery;\nJ('body').html()\n\n`
    );
  }
  window.jQuery = $;
})();

$(".btn")
  .html("<b>Clicked</b>")
  .css("color", "blue")
  .css({
    color: "white",
    letterSpacing: "1px",
    textTransform: "uppercase",
    backgroundColor: "blue",
    padding: "1rem",
  })
  .on("click", function () {
    $(this).toggleClass("white");
  })
  .forAll((a) => $(a).css("border-radius", "10px"));

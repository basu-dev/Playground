/** Debouce means call function after a time gap between
 * two events exceed our limit
 */

let inputField = document.querySelector("input");

const fetchApi = (str) => {
  console.log(`Fetching for ${str}`);
};

const delayed = (function debounce(delay) {
  let timer;
  return function (cb) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay);
  };
})(300);

inputField.addEventListener("keyup", (e) =>
  delayed(() => fetchApi(e.target.value))
);

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
 *
 *
 */

// function callApi(text) {
//   console.log(text);
// }

// let input = document.querySelector("input");
// input.addEventListener(
//   "keyup",
//   debounce((event) => callApi(event.target.value), 300)
// );

// function debounce(cb, delay) {
//   /**This function is called while initialiation and adds returned function on keyup event */
//   let timer;
//   return function xyz() {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => cb.apply(context, args), delay);
//   };
// }

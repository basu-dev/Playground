(function A() {
  let a = new Promise1((resolve, reject) => {
    setInterval(() => {
      reject("Some message");
      resolve([3, 4, 5]);
    }, 1000);
  });

  a.then(console.log)
    .catch(console.error)
    .finally(() => console.log("Done"));
})();

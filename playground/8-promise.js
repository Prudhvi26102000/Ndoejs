const doWorkMyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3, 4]);
    reject("There is a Error!");
  }, 1000);
});

doWorkMyPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error ", error);
  });

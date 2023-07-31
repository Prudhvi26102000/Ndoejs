// const doWorkMyPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 2, 3, 4]);
//     reject("There is a Error!");
//   }, 1000);
// });

// doWorkMyPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error ", error);
//   });

const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};

add(1, 1).then((sum) => {
  console.log(sum);
  return add(sum, 4)
    .then((sum2) => {
      console.log(sum2);
    })
    .catch((e) => {
      console.log(e);
    });
});

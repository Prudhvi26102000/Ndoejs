// setTimeout(() => {
//   console.log("Two sec are up");
// }, 2000);

// const names = ["luffy", "zoro", "sanji"];
// const shotnames = names.filter((name) => {
//   return name.length <= 4;
// });
// console.log(shotnames);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Losangels", (data) => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    const data = a + b;
    callback(data);
  }, 2000);
};

add(1, 4, (data) => {
  console.log(data);
});

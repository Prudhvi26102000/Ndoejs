const mongoose = require("mongoose");

//Connecting to the database...
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const me = new User({
//   name: "Virat",
//   email: "Virat@gmail.com",
//   password: "virat181",
//   age: 35,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const task = new Task({
//   description: " Eat Lunch",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

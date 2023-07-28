// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id, id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }

    const db = client.db(databaseName);

    //To find one document...........................................................
    // db.collection("users").findOne({ name: "zoro" }, (error, user) => {
    //   if (error) {
    //     return console.log(error);
    //   }
    //   console.log(user);
    // });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("64c3c0c95b0ec62dc461be27") },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    //To find list Of documents.........................................................
    // db.collection("users")
    //   .find({ age: 35 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    //Insert One document...
    // db.collection("users").insertOne(
    //   {
    //     name: "Rohit Sharma",
    //     age: 36,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    //Update documents.....................................................................
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("64c24a796ff1911c446b7cd8") },
    //     {
    //       $inc: {
    //         age: -1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //Insert Many documents..........................................................................
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "zoro",
    //       age: 21,
    //     },
    //     {
    //       name: "luffy",
    //       age: 19,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the  house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "Pot plants",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //Delete Document........................................................................................
    db.collection("users")
      .deleteMany({
        age: 35,
      })
      .then((result) => {
        console.log(result.ops);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

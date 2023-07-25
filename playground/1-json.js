const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryon Holiday",
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// const databuffer = fs.readFileSync("1-json.json");
// const dataJSON = databuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
data.name = "Luffy";
data.age = "21";
const user = JSON.stringify(data);
fs.writeFileSync("1-json.json", user);

const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

//Create a Add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create a remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create a List command
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler() {
    notes.listNotes();
  },
});

//Create a read command
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Read a Note",
      demandOption: true,
      title: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);

yargs.parse();

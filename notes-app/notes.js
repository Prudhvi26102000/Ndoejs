const fs = require("fs");
const chalk = require("chalk");

//Adding a Note.....
const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title );
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("New Note added!!"));
  } else {
    console.log(chalk.red.inverse("Note Already existed!"));
  }

  saveNotes(notes);
};

//Removing a Note....
const removeNote = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note removed!!"));
    saveNotes(noteToKeep);
  } else {
    console.log(chalk.red.inverse("No Note Found!!"));
  }
};

//Listing All Notes
const listNotes = () => {
  console.log(chalk.inverse("Your notes..."));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

//Reading the Note
const readNote = (title) => {
  const notes = loadNotes();
  const resultedNote = notes.find((note) => note.title === title);
  if (resultedNote) {
    console.log(chalk.inverse(resultedNote.title));
    console.log(resultedNote.body);
  } else {
    console.log(chalk.red.inverse("No note had present!"));
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const bufferdata = fs.readFileSync("notes.json");
    const dataJson = bufferdata.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};

const chalk = require('chalk')
const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes()
  const afterRemoveNotes = notes.filter(function (note) {
    return note.title !== title;
  });
  
  if (afterRemoveNotes.length === notes.length) {
    console.log(chalk.red.inverse('title not exists'))
  } else {
    saveNotes(afterRemoveNotes)
    console.log(chalk.green.inverse('title removed!'))
  }
}
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};

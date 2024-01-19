const util = require('util');
const fs = require('fs');

// make ids
const uuid = require('uuid');

//use promisify to handle async functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//creates a class that handles each aspect of the ids
class NoteID {
  //reads the notes
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  //writes the new note
  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note, null, 3));
  }

  //finds the specific note using id
  async retrieveNotes() {
    const notes = await this.read();
    let parsedNotes;
    // returns empty array when some err throws
    try {
      parsedNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      parsedNotes = [];
    }
    return parsedNotes;
  }

  //adds note if it meets all the object requirments
  async addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Must have a 'title' and 'text' to continue");
    }

    // creates id
    const newNote = { title, text, id: uuid() };

    // grab all notes - add new one - updates notes
    const notes = await this.retrieveNotes();
    const allNotes = [...notes, newNote];
    await this.write(allNotes);
    return newNote;
  }

  async deleteNote(id) {
    // looks through all notes to remove the correct id
    const notes = await this.retrieveNotes();
    const keptNotes = notes.filter((note) => note.id !== id);
    return await this.write(keptNotes);
  }
}

module.exports = new NoteID();

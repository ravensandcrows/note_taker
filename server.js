//dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// const notes = require('./public/assets/js/index')
// const api = require('../Assets/js/index.js');


//set up server
const app = express();
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static('public'));

// // GET Route for note page
app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, './public/notes.html'))
});


app.get('/api/notes', (req, res)=>{
  const oldNotes = require('./db/db.json');
  res.json(oldNotes);
})

app.post('/api/notes', (req, res)=>{
  const newNote = require('./db/db.json');
  newNote.push(req.body)
  fs.writeFile('./db/db.json', JSON.stringify(newNote, null, 2), err =>{
    if (err){
      console.log(err)
    }
    else{
      console.log('Note Saved!');
      res.status(201).end();
    }
  })
})



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

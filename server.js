const express = require('express');
const path = require('path');
// const fs = require('fs');
// const notes = require('./public/assets/js/index')
// const api = require('../Assets/js/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );
app.get('/api/notes', (req, res)=>{
  const oldNotes = require('./db/db.json');
  res.json(oldNotes);
})


// // GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

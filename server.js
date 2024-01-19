const express = require('express');
const apiRoutes = require('./routes/routeNotes');
const htmlRoutes = require('./routes/routeHTML');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

//dependencies
// const express = require('express');
// const htmlRoutes = require('./routes/routeHTML');
// const fs = require('fs');
// const store = require('./db/store');


// const notes = require('./public/assets/js/index')
// const api = require('../Assets/js/index.js');


//set up server
// const app = express();
// const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use('/', htmlRoutes);



// app.get('/api/notes', (req, res)=>{
//    const oldNotes = require('./db/db.json');
//    res.json(oldNotes);
// })

// app.get('/api/notes', (req, res) => {
//   store
//     .getNotes()
//     .then((notes) => {
//       return res.json(notes);
//     })
//     .catch((err) => res.status(500).json(err));
// });
// app.post('/api/notes', (req, res) => {
//   store
//     .addNote(req.body)
//     .then((note) => res.json(note))
//     .catch((err) => res.status(500).json(err));
// });
//POST ROUTES
// app.post('/api/notes', (req, res)=>{
//   const newNote = require('./db/db.json');
//   newNote.push(req.body)
//   fs.writeFile('./db/db.json', JSON.stringify(newNote, null, 2), err =>{
//     if (err){
//       console.log(err)
//     }
//     else{
//       console.log('Note Saved!');
//       res.status(201).end();
//     }
//   })
// })



// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT}`)
// );

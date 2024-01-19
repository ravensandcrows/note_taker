const router = require('express').Router();
//get the ids
const id = require('../db/id');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  id
  //run function from id js
    .retrieveNotes()
    //handle the asynch function to run on promise, or to err on fail
    .then((note) => {
      return res.json(note);
    })
    //return a internal server error when rejected
    .catch((err) => res.status(500).json(err));
});

//post new notes to database
router.post('/notes', (req, res) => {
  //call id class from id.js
  id
  //calls add note function to update the req
    .addNote(req.body)
    //then/catch to respond with the update or push an err
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// :id identifies the specific id currently being targeted
router.delete('/notes/:id', (req, res) => {
  id
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

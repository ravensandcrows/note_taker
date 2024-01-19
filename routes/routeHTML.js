const path = require('path');
const router = require('express').Router();

//get the html files for navigation between pages
router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

//catch all other routes
router.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
module.exports = router;
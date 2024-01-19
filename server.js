//dependencies
const express = require('express');
const apiRoutes = require('./routes/routeNotes');
const htmlRoutes = require('./routes/routeHTML');

// initialize app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data + static and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start the server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
// index.js

// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');

// Set up routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

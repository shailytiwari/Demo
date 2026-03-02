const express = require('express');
const app = express();
const mongoose = require("mongoose");

// Middleware to parse JSON
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Demo", {
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Import routes
const studentRoutes = require('./routes/studentroute');

// Use routes
app.use('/students', studentRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

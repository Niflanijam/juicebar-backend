const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

console.log("Attempting MongoDB connection with URI:", uri); // Add this line for debugging

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connection successful!'); // Log success
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err); // Log errors
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const commentsRouter = require('./routes/comments');
app.use('/comments', commentsRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
















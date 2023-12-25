// Set up Express server
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB Atlas (replace 'YOUR_CONNECTION_STRING' with your MongoDB Atlas connection string)
mongoose.connect('YOUR_CONNECTION_STRING', { useNewUrlParser: true, useUnifiedTopology: true });


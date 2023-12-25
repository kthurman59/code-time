// Set up Express server
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB Atlas (replace 'YOUR_CONNECTION_STRING' with your MongoDB Atlas connection string)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Define MongoDB Schema and Model (using Mongoose)
const problemSchema = new mongoose.Schema({
    text: String,
    category: String,
  });
  
  const Problem = mongoose.model('Question', problemSchema);

// Define route to get questions
app.get('/problems', async (req, res) => {
  try {
    const problems = await Problem.find(); // Fetch questions from MongoDB
    res.json(problems); // Send questions as JSON response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
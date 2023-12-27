// models/Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  problem: String
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;

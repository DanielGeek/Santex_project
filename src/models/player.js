const mongoose = require('../database/db');

const PlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  dateOfBirth: String,
  nationality: String,
  // Add more fields as necessary
});

module.exports = mongoose.model('Player', PlayerSchema);

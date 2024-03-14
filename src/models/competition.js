const mongoose = require('../database/db');

const CompetitionSchema = new mongoose.Schema({
  name: String,
  code: String,
  areaName: String,
  // Add more fields as necessary
});

module.exports = mongoose.model('Competition', CompetitionSchema);

const mongoose = require('../database/db');

const TeamSchema = new mongoose.Schema({
  name: String,
  tla: String,
  shortName: String,
  areaName: String,
  address: String,
  // Add more fields as necessary
});

module.exports = mongoose.model('Team', TeamSchema);

const fetch = require('node-fetch');
const Competition = require('../models/competition');
const Team = require('../models/team');
const Player = require('../models/player');

async function importLeague(leagueCode) {
  // Fetch data from football-data.org API
  // Save to DB
  // Return the imported data
}

async function getPlayers(leagueCode, teamName) {
  // Retrieve players from DB based on leagueCode and optionally teamName
}

async function getTeam(name) {
  // Retrieve a team and its players/coaches from the DB
}

module.exports = { importLeague, getPlayers, getTeam };

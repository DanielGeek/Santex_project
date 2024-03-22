const axios = require('axios');
require('dotenv').config();

const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;

const getCompetitionData = async (leagueCode) => {
  try {
    const response = await axios.get(`http://api.football-data.org/v2/competitions/${leagueCode}`, {
      headers: {
        'X-Auth-Token': FOOTBALL_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching competition data: ${error}`);
  }
};

module.exports = { getCompetitionData };

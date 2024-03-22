const db = require('../db/db');

class Player {
  static async getPlayersByTeam(teamName) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM players WHERE team_name = ?', [teamName], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Player;

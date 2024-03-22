const db = require('../db/db');

class Team {
  static async getTeamInfo(name) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM teams WHERE name = ?', [name], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }
}

module.exports = Team;

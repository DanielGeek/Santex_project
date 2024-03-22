const { query } = require('../db/db');

class League {
  static async importLeague(leagueData) {
    try {
      const { name, code, areaName } = leagueData;
      const sql = 'INSERT INTO leagues (name, code, area_name) VALUES (?, ?, ?)';
      await query(sql, [name, code, areaName]);
      console.log(`League ${name} imported successfully`);
    } catch (error) {
      console.error('Error importing league:', error);
      throw error;
    }
  }

  static async getLeagueByCode(leagueCode) {
    return new Promise((resolve, reject) => {
      query('SELECT * FROM leagues WHERE code = ?', [leagueCode], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }
}

module.exports = League;

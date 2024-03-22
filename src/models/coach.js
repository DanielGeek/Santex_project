import { query } from '../db/db';

class Coach {
  static async getCoachesByTeam(teamName) {
    return new Promise((resolve, reject) => {
      query('SELECT * FROM coaches WHERE team_name = ?', [teamName], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default Coach;

const { getCompetitionData } = require('../services/footballDataService');
const League = require('../models/League').default;
const Player = require('../models/player');
const Team = require('../models/team');

const resolvers = {
  Query: {
    players: async (_, { leagueCode, teamName }, __) => {
      try {
        const league = await League.getLeagueByCode(leagueCode);
        if (!league) {
          throw new Error(`League with code ${leagueCode} not found`);
        }

        let players = [];
        if (teamName) {
          players = await Player.getPlayersByTeam(teamName);
        } else {
          
          const teams = await Team.getAllTeams();
          for (const team of teams) {
            const teamPlayers = await Player.getPlayersByTeam(team.name);
            players.push(...teamPlayers);
          }
        }

        return players;
      } catch (error) {
        throw new Error(`Error getting players: ${error}`);
      }
    },
    team: async (_, { name }, __) => {
      try {

        const teamInfo = await Team.getTeamInfo(name);
        if (!teamInfo) {
          throw new Error(`Team ${name} not found`);
        }

        return teamInfo;
      } catch (error) {
        throw new Error(`Error getting team information: ${error}`);
      }
    }
  },
  Mutation: {
    importLeague: async (_, { leagueCode }, __) => {
      try {
        await getCompetitionData(leagueCode);
        return `League with code ${leagueCode} imported successfully`;
      } catch (error) {
        throw new Error(`Error importing league: ${error}`);
      }
    }
  }
};

module.exports = resolvers;

const { importLeague, getPlayers, getTeam } = require('../../services/footballDataService');

const resolvers = {
  Query: {
    players: (_, { leagueCode, teamName }) => getPlayers(leagueCode, teamName),
    team: (_, { name }) => getTeam(name),
  },
  Mutation: {
    importLeague: (_, { leagueCode }) => importLeague(leagueCode),
  },
};

module.exports = resolvers;

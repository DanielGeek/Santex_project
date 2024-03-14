const { gql } = require('apollo-server');

const typeDefs = gql`
  type Competition {
    name: String
    code: String
    areaName: String
  }

  type Team {
    name: String
    tla: String
    shortName: String
    areaName: String
    address: String
  }

  type Player {
    name: String
    position: String
    dateOfBirth: String
    nationality: String
  }

  type Query {
    players(leagueCode: String!, teamName: String): [Player]
    team(name: String!): Team
  }

  type Mutation {
    importLeague(leagueCode: String!): Competition
  }
`;

module.exports = typeDefs;

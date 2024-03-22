// graphql/schemas.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    players(leagueCode: String!, teamName: String): [Player]
    team(name: String!): Team
  }

  type Mutation {
    importLeague(leagueCode: String!): String
  }

  type Player {
    name: String
    position: String
    dateOfBirth: String
    nationality: String
  }

  type Team {
    name: String
    tla: String
    shortName: String
    areaName: String
    address: String
    players: [Player]
  }
`;

module.exports = typeDefs;

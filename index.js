const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./src/graphql/schemas');
const resolvers = require('./src/graphql/resolvers');

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer().catch(error => console.log(error));

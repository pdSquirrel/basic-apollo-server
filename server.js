import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './models/books/typeDefs.graphql';
import resolvers from './models/books/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

import path from 'path';
import { makeExecutableSchema } from 'apollo-server-express';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

import resolvers from './resolvers';

const typesArray = fileLoader(path.join(__dirname, 'schema'), {
  recursive: true,
});

const typeDefs = mergeTypes(typesArray, { all: true });

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});

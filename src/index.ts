import 'tsconfig-paths/register';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';

const app = express();

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  playground:
    process.env.NODE_ENV === 'production'
      ? {
          endpoint: '/graphql',
        }
      : true,
});

apolloServer.applyMiddleware({ app, path: '/', cors: true });

app.listen(4000, () => console.log('🚀 Server running on port 4000'));

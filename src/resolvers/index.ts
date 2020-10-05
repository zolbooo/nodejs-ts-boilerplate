import { Resolvers } from '@/graphql';

import * as Query from './query';
import * as Types from './types';
import * as Mutation from './mutation';

const resolvers: Resolvers = {
  Query,
  Mutation,
  ...Types,
};

export default resolvers;

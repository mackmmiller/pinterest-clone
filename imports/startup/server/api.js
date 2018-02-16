import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import PinSchema from '../../api/pins/Pin.graphql';
import PinResolvers from '../../api/pins/resolvers';
import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';

const typeDefs = [UserSchema, PinSchema];
const resolvers = merge(UserResolvers, PinResolvers);
// sssssssssssssssssssssss
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });

import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import PinSchema from "../../api/pins/Pin.graphql";
import PinResolvers from "../../api/pins/resolvers";
import UserSchema from "../../api/users/User.graphql";
import UserResolvers from "../../api/users/resolvers";

const typeDefs = [UserSchema, PinSchema];
const resolvers = Object.assign({}, UserResolvers, PinResolvers);

console.log(resolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });

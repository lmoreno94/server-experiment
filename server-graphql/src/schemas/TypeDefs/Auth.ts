import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const TAuth_User = new GraphQLObjectType({
    name: 'Auth_User',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    }
});

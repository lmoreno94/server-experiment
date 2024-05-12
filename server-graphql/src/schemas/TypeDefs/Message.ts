import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

export const TMessage = new GraphQLObjectType({
    name: 'Message',
    fields: {
        ok: { type: GraphQLBoolean },
        msg: { type: GraphQLString }
    }
})

export const T_AUTH_MESSAGE = new GraphQLObjectType({
    name: 'AUTH_MESSAGE',
    fields: {
        ok: { type: GraphQLBoolean },
        msg: { type: GraphQLString },
        token: { type: GraphQLString }
    }
})
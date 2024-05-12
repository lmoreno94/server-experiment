import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { Users } from '../../entities/User';
import { TUser } from './User';

export const TPostMutation = new GraphQLObjectType({
    name: 'PostsTypeMutation',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { 
            type: TUser, 
            resolve(parent){
                return Users.findOneBy({ id: parent.__user__})
            }
        }
    }
});

export const TPostQuery = new GraphQLObjectType({
    name: 'PostsTypeQuery',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { 
            type: TUser, 
            resolve(parent){
                return Users.findOneBy({ post: { id: parent.id } })
            }
        }
    }
});
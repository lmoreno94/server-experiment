import { TPostQuery } from '../TypeDefs/Post';
import { Posts } from '../../entities/Post';
import { GraphQLList, GraphQLID } from 'graphql';

export const GET_ALL_POST = {
    type: new GraphQLList(TPostQuery),
    resolve: async (_: any, __: any, { user }: any) => {
        const result = await Posts.find({
            where: {
                user: {
                    id: user.id
                }
            }
        });
        return result;
    }
}

export const GET_ONE_POST = {
    type: TPostQuery,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_: any, args: any, { user }: any){
        const result = await Posts.findOneBy({ 
            id: args.id,
            user: {
                id: user.id
            }
        });
        return result;
    }
}
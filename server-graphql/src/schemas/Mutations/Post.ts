import { GraphQLBoolean, GraphQLString, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Posts } from '../../entities/Post';
import { TPostMutation } from '../TypeDefs/Post';
import { TMessage } from '../TypeDefs/Message';
import { Users } from '../../entities/User';

export const CREATE_POST = {
    type: TPostMutation,
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    },
    async resolve(_: any, args: any, { user }: any){
        if (!user) throw new Error("You must be logged in to do that");

        const { title, body }= args;

        const userFound = await Users.findOneBy({ id: user.id })
        if (!userFound) throw new Error("Unauthorized");

        const post = new Posts();
        post.title = title;
        post.body = body; 
        post.user = user.id

        const result = await Posts.save(post)

        return {...result}
    }
}

export const DELETE_POST = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_:any, { id }: any){
        const result = await Posts.delete(id);
        if( result.affected === 1 ) return true;
        return false;
    }
}

export const UPDATE_POST = {
    type: TMessage,
    args: {
        id: { type: GraphQLID },
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputPost',
                fields: {
                    title: { type: GraphQLString },
                    body: { type: GraphQLString },
                    author: { type: GraphQLID }
                }
            })
         }
    },
    async resolve(_:any, { id, input }: any){
        const postFound = await Posts.findOneBy({ id });
        if(!postFound) return {
            ok: false,
            msg: "POST_NOT_FOUND"
        }

        const result = await Posts.update({ id }, { title: input.title, body: input.body })

        if( result.affected === 1 ) return {
            ok: true,
            msg: "TRUE_POST_UPDATE"
        };

        return {
            ok: false,
            msg: "ERROR_UPDATE_POST"
        };
    }
}
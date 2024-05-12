import { TUser } from '../TypeDefs/User';
import { Users } from '../../entities/User';
import { GraphQLList, GraphQLID } from 'graphql';

export const GET_ALL_USERS = {
    type: new GraphQLList(TUser),
    async resolve(){
        const result = await Users.find();
        return result;
    }
}

export const GET_ONE_USER = {
    type: TUser,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_: any, args: any){
        const result = await Users.findOneBy({ id: args.id });
        return result;
    }
}
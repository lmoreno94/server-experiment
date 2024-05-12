import { GraphQLBoolean, GraphQLString, GraphQLID, GraphQLInputObjectType } from 'graphql';
import { Users } from '../../entities/User';
import { TUser } from '../TypeDefs/User';
import { encrypt, verified } from '../../utils/bcrypt.handler';
import { TMessage } from '../TypeDefs/Message';

export const CREATE_USER = {
    type: TUser,
    args: {
        name: { type: GraphQLString },
        user: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: any, args: any){
        const { name, user, password, email }= args;

        const encryptPassword = await encrypt(password);

        const result = await Users.insert({
            name,
            user,
            email,
            password: encryptPassword
        })

        return {...args, id: result.identifiers[0].id, password: encryptPassword}
    }
}

export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_:any, { id }: any){
        const result = await Users.delete(id);
        if( result.affected === 1 ) return true;
        return false;
    }
}

export const UPDATE_USER = {
    type: TMessage,
    args: {
        id: { type: GraphQLID },
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputUser',
                fields: {
                    name: { type: GraphQLString },
                    user: { type: GraphQLString },
                    oldPassword: { type: GraphQLString },
                    newPassword: { type: GraphQLString }
                }
            })
         }
    },
    async resolve(_:any, { id, input }: any){
        const userFound = await Users.findOneBy({ id });
        if(!userFound) return {
            ok: false,
            msg: "USER_NOT_FOUND"
        }

        const isCorrect = await verified(input.oldPassword, userFound.password);
        if(!isCorrect) return {
            ok: false,
            msg: "PASSWORD_ERROR"
        };

        const encryptPassword = await encrypt(input.newPassword);
        const result = await Users.update({ id }, { name: input.name, user: input.user, password: encryptPassword })

        if( result.affected === 1 ) return {
            ok: true,
            msg: "TRUE_USER_UPDATE"
        };

        return {
            ok: false,
            msg: "ERROR_UPDATE_USER"
        };
    }
}
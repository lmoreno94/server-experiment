import { GraphQLString, GraphQLInputObjectType } from 'graphql';
import { Users } from '../../entities/User';
import { encrypt, verified } from "../../utils/bcrypt.handler";
import { generateToken } from "../../utils/jwt.handler";
import { T_AUTH_MESSAGE } from '../TypeDefs/Message';


export const REGISTER_USER = {
    type: T_AUTH_MESSAGE,
    args: {
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputRegisterUser',
                fields: {
                    email: { type: GraphQLString },
                    password: { type: GraphQLString }
                }
            })
         }
    },
    async resolve(_: any, { input }: any){

        const userFound = await Users.findOneBy({ email: input.email });
        if(userFound) return {
            ok: false,
            msg: "USER_EXIST",
        }

        const encryptPassword = await encrypt(input.password);

        const result = await Users.insert({
            email: input.email,
            password: encryptPassword
        })

        const jwt = await generateToken(result.identifiers[0].id);

        if(result) return {
            ok: true,
            msg: "REGISTER_USER_OK",
            token: jwt
        }

        return {
            ok: false,
            msg: "ERROR_REGISTER_USER",
        }
    }
}

export const LOGIN_USER = {
    type: T_AUTH_MESSAGE,
    args: {
        input: { 
            type: new GraphQLInputObjectType({
                name: 'InputLoginUser',
                fields: {
                    email: { type: GraphQLString },
                    password: { type: GraphQLString }
                }
            })
         }
    },
    async resolve(_: any, { input }: any){

        const checkIs = await Users.findOneBy({ email: input.email })
        if(!checkIs) return { 
            ok: false,
            msg: 'NOT_FOUND_USER'
        }

        const passwordHash = checkIs.password;
        const isCorrect = await verified(input.password, passwordHash);
        if(!isCorrect) return {
            ok: false,
            msg: 'PASSWORD_INCORRECT'
        }

        const token = await generateToken(checkIs.id);

        return { 
            ok: true,
            msg: "USER_OK",
            token 
        }
    }
}
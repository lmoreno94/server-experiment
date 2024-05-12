import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { registerNewUser, logInUser } from '../services/Auth'

const register = async({ body }: Request, res:  Response) => {
    try {
        const responseUser = await registerNewUser(body);
        res.send(responseUser)
    } catch (error) {
        handleHttp(res, "ERROR_POST_REGISTER")
    }
}

const login = async({ body }: Request, res:  Response) => {
    try {
        const { email, password } = body
        const responseUser = await logInUser({ email, password })

        if( responseUser === 'PASSWORD_INCORRECT' ){
            res.status(401)
            res.send(responseUser)
        }else{
            res.send(responseUser)
        }
    } catch (error) {
        handleHttp(res, "ERROR_POST_LOGIN")
    }
}

export { register, login }
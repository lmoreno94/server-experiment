import { IUser } from "../interfaces/user"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handler"
import { IAuth } from '../interfaces/auth';
import { generareToken } from "../utils/jwt.handler";

const registerNewUser = async({ email, password, name }: IUser) => {
    const checkIs = await UserModel.findOne({ email })
    if(checkIs) return 'ALREADY_USER'

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ email, password: passHash, name })
    return registerNewUser
}

const logInUser = async({ email, password}:IAuth) => {
    const checkIs = await UserModel.findOne({ email })
    if(!checkIs) return 'NOT_FOUND_USER'

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)
    if(!isCorrect) return 'PASSWORD_INCORRECT'

    const token = generareToken(checkIs.email)
    return { token, user: checkIs }
}

export { registerNewUser, logInUser }
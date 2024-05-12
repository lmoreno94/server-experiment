import { IUser } from "../interfaces/User"
import { User } from "../entities/User"
import { encrypt, verified } from "../utils/bcrypt.handler"
import { IAuth } from '../interfaces/Auth';
import { generareToken } from "../utils/jwt.handler";

const registerNewUser = async({ email, password, user }: IUser) => {
    const checkIs = await User.findOneBy({ email })
    if(checkIs) return 'ALREADY_USER'

    const passHash = await encrypt(password);

    const newUser = new User();
    newUser.email = email;
    newUser.password = passHash;
    newUser.user = user;

    const registerNewUser = await newUser.save()
    return registerNewUser
}

const logInUser = async({ email, password}:IAuth) => {
    const checkIs = await User.findOneBy({ email })
    if(!checkIs) return 'NOT_FOUND_USER'

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)
    if(!isCorrect) return 'PASSWORD_INCORRECT'

    const token = await generareToken(checkIs.id)
    return { token, user: checkIs }
}

export { registerNewUser, logInUser }
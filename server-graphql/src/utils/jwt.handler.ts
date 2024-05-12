import "dotenv/config";
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.SECRET_SEED_KEY || '';

const generateToken = async( id:string ) => { 
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: '1h'
    })
    return jwt
}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { generateToken, verifyToken }
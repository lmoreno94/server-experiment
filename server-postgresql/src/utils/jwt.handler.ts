import "dotenv/config";
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.SECRET_SEED_KEY || 'asgfqaerghKJDAO972681(&#/%#khfsdf';

const generareToken = async( id:number ) => { 
    console.log("$$$$$$$$  ID $$$$$$$$ ", id);
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: '2h'
    })
    return jwt
}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { generareToken, verifyToken }
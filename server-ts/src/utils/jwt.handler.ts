import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.SECRET_SEED_KEY || 'KHDioduutgeuygdfi*6367g7udiaoiuyuYUFGIh9378y39hJOIIHd'

const generareToken = async( id:string ) => { 
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


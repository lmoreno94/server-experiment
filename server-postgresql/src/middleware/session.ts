import { NextFunction, Response } from 'express'
import { RequestExt } from '../interfaces/ResquestExt'
import { verifyToken } from '../utils/jwt.handler'

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ''
        const jwt = jwtByUser.split(' ').pop()
        const isUser = verifyToken(`${jwt}`) as { id: string }

        if(!isUser){
            res.status(401)
            res.send('SESSION_NO_VALID')
        }else{
            req.user = isUser
            next()
        }

    } catch (error) {
        res.status(400)
        res.send('SESSION_NO_VALID')
    }
}

export { checkJWT }
import { Request, Response } from "express";
import SUser from '../services/User';
import { handleHttp } from '../utils/error.handler';

const getUser = async({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseUser = await SUser.getUser(Number(id));
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_GET_USER", error);
    }
}

const getUsers = async(_req: Request, res: Response) => {
    try {
        const responseUser = await SUser.getUsers();
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_GET_USERS", error);
    }
}

const postUser = async({ body }: Request, res: Response) => {
    try {
        const responseUser = await SUser.postUser(body);
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_POST_USER", error);
    }
}

const putUser = async({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseGetUser = await SUser.getUser(Number(id));
        if( !responseGetUser ){
            return handleHttp(res, "ERROR_ID_UPDATE_USER", 'Not Exist');
        }
        const responseUser = await SUser.putUser(Number(id), body);
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_PUT_USER", error);
    }
}

const deleteUser = async({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseGetUser = await SUser.getUser(Number(id));
        if( !responseGetUser ){
            return handleHttp(res, "ERROR_ID_DELETE_USER", 'Not Exist');
        }
        const responseUser = await SUser.deleteUser(Number(id));
        res.send(responseUser);
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_USER", error);
    }
}

export default { getUser, getUsers, postUser, putUser, deleteUser }
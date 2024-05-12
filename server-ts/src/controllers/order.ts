import { Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { RequestExt } from '../interfaces/requestExt';

const getOrder = (_req: RequestExt, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_ORDER")
    }
}

const getOrders = (_req: RequestExt, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_ORDERS")
    }
}

const postOrder = (_req: RequestExt, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_POST_ORDER")
    }
}

const updateOrder = (_req: RequestExt, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ORDER")
    }
}

const deleteOrder = (_req: RequestExt, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ORDER")
    }
}

export { getOrder, getOrders, postOrder, updateOrder, deleteOrder }
import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { getCar, getCars, postCar, updateCar, deleteCar } from '../services/item'

const getItem = async({ params }: Request, res:  Response) => {
    try {
        const { id } = params
        const responseCar = await getCar(id)
        res.send(responseCar)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM", error)
    }
}

const getItems = async(_req: Request, res:  Response) => {
    try {
        const responseCars = await getCars()
        res.send(responseCars)
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS", error)
    }
}

const postItem = async({ body }: Request, res:  Response) => {
    try {
        const responseCar = await postCar(body)
        res.send(responseCar)
    } catch (error) {
        handleHttp(res, "ERROR_POST_ITEM", error)
    }
}

const updateItem = async({ params, body }: Request, res:  Response) => {
    try {
        const { id } = params
        const responseCar = await updateCar(id, body)
        res.send(responseCar)
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEM", error)
    }
}

const deleteItem = async({ params }: Request, res:  Response) => {
    try {
        const { id } = params
        const responseCar = await deleteCar(id)
        res.send(responseCar)
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEM", error)
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }
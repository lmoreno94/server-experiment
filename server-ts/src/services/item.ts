import { ICar } from '../interfaces/car'
import ItemModel from '../models/item'

const getCar = async(id: string) => {
    const responseCar = await ItemModel.findOne({ _id: id })
    return responseCar
}

const getCars = async() => {
    const responseCars = await ItemModel.find({})
    return responseCars
}

const postCar = async(item: ICar) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

const updateCar = async(id: string, form: ICar) => {
    const responseUpdate = await ItemModel.findOneAndUpdate({ _id: id }, form, { new: true })
    return responseUpdate
}

const deleteCar = async(id: string) => {
    const responseDelete = await ItemModel.deleteOne({ _id: id })
    return responseDelete
}

export { getCars, getCar, postCar, updateCar, deleteCar }
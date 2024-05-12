import { Weather } from "../enums"
import isString from "./isString"
import isWeather from "./isWeather"

const parseWeather = (weatherFromRequest: any): Weather => {
    if( !isString(weatherFromRequest) || !isWeather(weatherFromRequest) ){
        throw new Error("Incorrect or missing Weather")
    }
    return weatherFromRequest
}

export default parseWeather
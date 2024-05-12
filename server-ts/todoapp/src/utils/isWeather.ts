import { Weather } from "../enums"

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

export default isWeather
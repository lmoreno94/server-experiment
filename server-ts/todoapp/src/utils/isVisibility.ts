import { Visibility } from "../enums"

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

export default isVisibility
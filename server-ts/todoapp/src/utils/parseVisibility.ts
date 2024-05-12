import { Visibility } from "../enums"
import isString from "./isString"
import isVisibility from "./isVisibility"

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if( !isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest) ){
        throw new Error("Incorrect or missing visibility")
    }
    return visibilityFromRequest
}

export default parseVisibility
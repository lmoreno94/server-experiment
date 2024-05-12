import isDate from './isDate';
import isString from './isString';

const parseDate = (dateFromRequest: any): string => {
    if( !isString(dateFromRequest) || !isDate(dateFromRequest) ){
        throw new Error("Incorrect or missing date");
        
    }
    return dateFromRequest
}

export default parseDate
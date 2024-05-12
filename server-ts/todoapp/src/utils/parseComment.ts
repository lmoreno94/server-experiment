import isString from './isString';

const parseComment = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest) ){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

export default parseComment
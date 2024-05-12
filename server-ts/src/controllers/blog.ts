import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'

const getBlog = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOG")
    }
}

const getBlogs = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_GET_BLOGS")
    }
}

const postBlog = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_POST_BLOG")
    }
}

const updateBlog = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_BLOG")
    }
}

const deleteBlog = (_req: Request, res:  Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_BLOG")
    }
}

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog }
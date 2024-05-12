import { Router } from 'express'
import { getBlog, getBlogs, postBlog, updateBlog, deleteBlog } from '../controllers/blog'

const router = Router()

router.get("/", getBlogs)
router.get("/:id", getBlog)
router.post("/", postBlog)
router.put("/", updateBlog)
router.delete("/", deleteBlog)

export { router }
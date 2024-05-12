import { Router } from 'express'
import { getOrder, getOrders, postOrder, updateOrder, deleteOrder } from '../controllers/order'
import { checkJWT } from '../middleware/session'

const router = Router()

router.get("/:id", getOrder)
router.get("/", checkJWT, getOrders)
router.post("/", postOrder)
router.put("/", updateOrder)
router.delete("/", deleteOrder)

export { router }
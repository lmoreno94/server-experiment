import { Router } from "express";
import CUser from "../controllers/User";

const router = Router();

router.get("/", CUser.getUsers);
router.get("/:id", CUser.getUser);
router.post("/", CUser.postUser);
router.put("/:id", CUser.putUser);
router.delete("/:id", CUser.deleteUser);

export { router }
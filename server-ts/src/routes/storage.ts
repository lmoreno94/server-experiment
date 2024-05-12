import { Router } from "express";
import { getFile } from "../controllers/storage";
import multerMiddleware from "../middleware/file";
import { checkJWT } from "../middleware/session";

const router = Router();

router.post("/", checkJWT, multerMiddleware.single("myfile"), getFile);

export { router };
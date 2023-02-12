import { Router } from "express";
import { createPost, findOneById, GetAll } from "../controllers/postController.js";

const router = Router();

router.post('/posts', createPost);
router.get('/posts', GetAll);
router.get('/posts/:id', findOneById);

export default router;
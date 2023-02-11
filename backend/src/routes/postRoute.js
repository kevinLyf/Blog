import { Router } from "express";
import { createPost, GetAll } from "../controllers/postController.js";

const router = Router();

router.post('/posts', createPost);
router.get('/posts', GetAll);

export default router;
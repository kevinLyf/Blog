import { Router } from 'express';
import {
  createPost,
  findOneById,
  GetAll,
} from '../controllers/postController.js';
import admin from '../middlewares/admin.js';

const router = Router();

router.post('/posts', admin, createPost);
router.get('/posts', GetAll);
router.get('/posts/:id', findOneById);

export default router;

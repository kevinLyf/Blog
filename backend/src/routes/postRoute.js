import { Router } from 'express';
import {
  createPost,
  deletePost,
  findOneById,
  GetAll,
} from '../controllers/postController.js';
import admin from '../middlewares/admin.js';

const router = Router();

router.post('/posts', admin, createPost);
router.get('/posts', GetAll);
router.get('/posts/:id', findOneById);
router.delete('/posts/:id', admin, deletePost);

export default router;

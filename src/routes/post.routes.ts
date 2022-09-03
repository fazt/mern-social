import Router from "express-promise-router";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts.controllers";
import { validateSchema } from "../middlewares/validateSchema";
import { CreatePostSchema } from "../schemas/Post.schema";

const router = Router();

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.post("/posts", validateSchema(CreatePostSchema), createPost);

router.delete("/posts/:id", deletePost);

router.put("/posts/:id", updatePost);

export default router;

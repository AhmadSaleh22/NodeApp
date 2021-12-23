//importing the router of api from express
import { Router } from "express";
//importing the controller
import {
getListOfPosts,
  getPostSpec,
  newPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const routerApi = Router();

router.get("/", getListOfPosts);
router.get("/:id", getPostSpec);

router.post("/", newPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default routerApi;
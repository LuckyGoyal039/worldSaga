import express from "express";
import { getPosts, getTrendingPosts } from "../controllers/Post.js";

const postRoutes = express.Router();

postRoutes.get('/', getPosts)

postRoutes.get('/trending', getTrendingPosts)

export default postRoutes
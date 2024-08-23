import express from "express";
import { getPosts, getReleventCategories, getTrendingPosts } from "../controllers/Post.js";

const postRoutes = express.Router();

postRoutes.get('/', getPosts)

postRoutes.get('/trending', getTrendingPosts)
postRoutes.get('/categories', getReleventCategories)

export default postRoutes
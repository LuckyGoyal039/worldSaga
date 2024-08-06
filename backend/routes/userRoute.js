import express from "express";
import imgUpload from '../middlewares/multer.js'

import {
  userSignIn,
  userSignUp,
  emailVerificationMail,
  forgetPassword,
  createUserPost,
  deleteUserPost,
  updateUserPost
} from "../controllers/user.js";
import { authMiddleware } from "../middlewares/user.js";
// const { checkLogin } = require("../middlewares/user");
// const flash = require("connect-flash");
const userRoutes = express.Router();

// Sign-up
userRoutes.post('/sign-up', userSignUp)

// sign-in
userRoutes.post('/sign-in', userSignIn)

//forget-password
userRoutes.post('/forget-password', forgetPassword)

//verify email
userRoutes.post("/verifyemail", emailVerificationMail);

// create new post
// not working
userRoutes.post('/create-post', authMiddleware(), imgUpload.upload.single("image"), createUserPost);

// delete post
// not working
userRoutes.delete('/delete-post', authMiddleware(), deleteUserPost);

// update post
// not working
userRoutes.put('/update-post/:id', authMiddleware(), updateUserPost)

export default userRoutes;

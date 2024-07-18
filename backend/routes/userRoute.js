import express from "express";
import {
  userSignIn,
  userSignUp,
  emailVerificationMail,
  forgetPassword,
  logout,
  createUserPost,
  deleteUserPost,
  updateUserPost
} from "../controllers/user.js";
// const { checkLogin } = require("../middlewares/user");
// const flash = require("connect-flash");
const userRoutes = express.Router();

// Sign-up
userRoutes.post('/sign-up', userSignUp)

// sign-in
userRoutes.post('/sign-in', userSignIn)

//forget-password
userRoutes.post('/forget-password', forgetPassword)

// logout
// not working
userRoutes.get("/logout", logout);

//verify email
userRoutes.post("/verifyemail", emailVerificationMail);

// create new post
// not working
userRoutes.post('/create-post', createUserPost);

// delete post
// not working
userRoutes.delete('/delete-post', deleteUserPost);

// update post
// not working
userRoutes.put('/update-post', updateUserPost)

export default userRoutes;

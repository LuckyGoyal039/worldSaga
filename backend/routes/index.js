import express from "express";
// import userRoutes from "./userRoute";
// import blogRoutes from "./blogRoutes";
// import { getBlogs, getAuditLogs } from ("../controllers/blog");
import {
  userSignIn,
  userSignUp,
  // getUsers,
  // changeUserType,
  // userDelete,
} from "../controllers/user.js";
import { checkAdmin } from "../middlewares/user.js";
const router = express.Router();

// router.get("/", (req, res) => {
//   res.redirect("/home");
// });
// // router.get("/home", getBlogs);

// router.get("/404", (req, res) => {
//   res.render("page404");
// });

router.post('/user/sign-up', userSignUp)
router.post('/user/sign-in', userSignIn)

// router.get("/admin/createUser", checkAdmin(), (req, res) => {
//   const admin = req.session.admin || false;
//   res.render("createUser", {
//     admin,
//     successMessage: req.flash("success"),
//     errorMessage: req.flash("error"),
//   });
// });
// router.post("/admin/createuser", checkAdmin(), userSignUp);

// router.get("/admin/manageuser", checkAdmin(), async (req, res) => {
//   const users = await getUsers(req.session?.user?.user_id);
//   const admin = req.session?.admin || false;
//   const isAuthenticate = req.session?.isAuthenticate || false;
//   res.render("manageUser", {
//     categories: [],
//     users,
//     admin,
//     isAuthenticate,
//     successMessage: req.flash("success"),
//     errorMessage: req.flash("error"),
//   });
// });

// router.get("/admin/changeusertype", checkAdmin(), changeUserType);
// router.get("/admin/deteteuser", checkAdmin(), userDelete);
// router.get("/admin/auditLogs", checkAdmin(), getAuditLogs);
// router.use("/user", userRoutes);

// router.use("/blog", blogRoutes);
export default router;

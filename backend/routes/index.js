import express from "express";
import userRoutes from "./userRoute.js";
// import adminRoutes from "./admin"
// import blogRoutes from "./blogRoutes";
// import { getBlogs, getAuditLogs } from ("../controllers/blog");

import { checkAdmin } from "../middlewares/user.js";
const router = express.Router();

// user routes
router.use('/user', userRoutes)

// admin routes
// router.use('/admin', adminRoutes)

// 
router.post('/', (req, res) => {
    try {
        return res.status(200).json({
            msg: "Hi from server"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

export default router;


// router.get("/home", getBlogs);


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


import User from "./models/user"
// import sequelize from ("./config/db/connection");
import path from "path";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
// import ejs from "ejs";
import routes from "./routes/index.js";
// import session from "express-session";
// import Blog from "./models/blog";
// import Roles from "./models/roles"
// import Permissions from "./models/permission";
// import AuditLog from "./models/auditLogs";
// import Category from "./models/category";
// import Comment from "./models/comments";
// import FormData from "./models/formData";
// import flash from ("connect-flash");
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.set("view engine", "ejs");

// app.set('views', path.resolve('./views'))
// app.set("views", path.join(__dirname, "/app/views"));
app.use(cors());
// app.use(express.static("./uploads"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //not working

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(
//     session({
//         secret: "secret-key",
//         resave: false,
//         saveUninitialized: false,
//     })
// );

// app.use(flash());
app.use("/", routes);

app.listen(8000, () => {
    console.log("Server running on port: 8000")
})

// sync user table
// sequelize
//     .sync()
//     .then((result) => {
//         console.log("All models synced successfully");
//         const PORT = process.env.PORT || 3000;
//         app.listen(PORT, () => {
//             console.log(`server running on http://localhost:${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log("Database synced failed: ", err);
//     });




// https://hpbn.co/primer-on-latency-and-bandwidth/#speed-is-a-feature
// https://www.bacancytechnology.com/blog/joi-validation-in-nodejs-and-express
// https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/

// issues
// why all the models not sync without import

// title
// category ajax
// create tags
// summary  styling ck editor
// table: deserialize, id value

// feature image
// description

// save preview page
// comments on blog

// blog card: image, category as ribbun on image,
// gravitar

// comments

// any user login or not

// name

// text field xss/ sql inject free

// sprite image
// capta image

// save
// validate by user who write the blog

// mailtrap.io


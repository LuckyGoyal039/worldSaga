// import User from "../models/user";
// import bcrypt from "bcrypt";
// import Sequelize, { where } from "sequelize";
// import { Op } from "sequelize";
// import flash from "connect-flash";
// import nodemailer from "nodemailer";
import express from "express";
// import { mailFormat, generateOTP } from "./otpmailformat.js";
import { PrismaClient } from '@prisma/client'
import { checkPassword, encryptPassword, isValidEmail } from "./common.js";
const prisma = new PrismaClient()

// let genratedOtp;
// const app = express();

const userSignUp = async function (req, res) {
  try {
    const { username, email, password } = req.body;
    let isEmailValid = isValidEmail(email);
    if (!isEmailValid) {
      return res.status(401).json({
        mesg: "Invalid Credentials"
      })
    }
    const user = await prisma.user.findUnique({
      where: { email_id: email }
    })
    if (user && user.length) {
      return res.status(403).json({
        mesg: "User already Exist"
      })
    }
    let hashPassword = encryptPassword(password);
    if (!hashPassword.status) {
      throw Error(hashPassword.msg);
    }
    const currPlan = await prisma.plans.findUnique({
      where: { plan_name: "basic" }
    });

    let newUser = await prisma.user.create({
      data: {
        email_id: email,
        username: username,
        password: hashPassword.hash,
        plan_end_date: null,
        plan_start_date: new Date(),
        plan_id: {
          connect: { id: currPlan.id },
        }
      }
    })
    return res.status(200).json({
      user: newUser,
      mesg: "Sign up successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something went wrong. unable to signup"
    })
  }
};

const userSignIn = async function (req, res) {
  try {
    const { email, password } = req.body;
    // validate email format
    let isEmailValid = isValidEmail(email);
    if (!isEmailValid) {
      return res.status(401).json({
        mesg: "Invalid Credentials"
      })
    }
    const isUser = await prisma.user.findUnique({ where: { email_id: email } });
    let correctPass = checkPassword(password, isUser?.password)

    if (!isUser || !correctPass) {
      return res.status(401).json({
        mesg: "Invalid Credentials"
      });
    }
    return res.status(200).json({
      msg: "SignIn Successfully",
      user: isUser
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something went wrong. unable to signup"
    })
  }
};

// async function getUsers(id) {
//   const users = await User.findAll({
//     where: {
//       user_id: {
//         [Sequelize.Op.ne]: id,
//       },
//     },
//     attributes: { exclude: ["password"] },
//   });

//   return users;
// }
// async function changeUserType(req, res) {
//   try {
//     const userData = await User.findOne({
//       where: {
//         user_id: req.query.id,
//       },
//     });
//     userData.set({
//       isAdmin: !userData.isAdmin,
//     });
//     await userData.save();
//     req.flash("success", "Sucess");
//     res.redirect("/admin/manageuser");
//   } catch (error) {
//     console.log("unable to change user type", error);
//     req.flash("error", "Something went wrong");
//     res.status(400).json("Someting went wrong");
//   }
// }
// async function userDelete(req, res) {
//   try {
//     const user = await User.findByPk(req.query.id);
//     await user.destroy();
//     req.flash("success", "User deleted successfully");
//     res.redirect("/admin/manageuser");
//   } catch (error) {
//     console.log("unable to delete user", error);
//     req.flash("error", "Something went wrong. unable to delete user");
//     res.redirect("/admin/manageuser");
//   }
// }

// async function sendEmail(req, res) {
//   const { email } = req.body;
//   genratedOtp = generateOTP();
//   const transporter = nodemailer.createTransport({
//     // host: "live.smtp.mailtrap.io",
//     host: "live.smtp.mailtrap.io",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "api",
//       pass: "d8d654977b245c9ecc83c028b639a111",
//     },
//   });

//   const info = await transporter.sendMail({
//     // from: "info@mailtrap.com", // sender address
//     from: "mailtrap@demomailtrap.com", // sender address
//     // to: email, // list of receivers
//     to: "goyallucky2020@gmail.com", // list of receivers
//     subject: "Verifiction email", // Subject line
//     text: genratedOtp,
//     html: mailFormat(), // html body
//   });
// }

export {
  userSignIn,
  userSignUp,
  // getUsers,
  // changeUserType,
  // userDelete,
  // sendEmail,
};

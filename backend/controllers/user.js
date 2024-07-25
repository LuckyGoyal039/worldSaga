import express from "express";
import nodemailer from "nodemailer";
import { PrismaClient } from '@prisma/client'
import { checkEmptyFields, checkPassword, encryptPassword, isValidEmail } from "./common.js";
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient()
// import User from "../models/user";
// import bcrypt from "bcrypt";
// import Sequelize, { where } from "sequelize";
// import { Op } from "sequelize";
// import flash from "connect-flash";
// import { mailFormat, generateOTP } from "./otpmailformat.js";

// let genratedOtp;
// const app = express();

export const userSignUp = async function (req, res) {
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
        plan_id: currPlan.id
      }
    })
    let payLoad = {
      id: newUser.id,
      email_id: newUser.email_id,
      plan_id: newUser.plan_id
    }
    let SEKRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign(payLoad, SEKRET_KEY, { expiresIn: '30d' });
    return res.status(200).json({
      user: {
        id: newUser.id,
        email: newUser.email_id,
        username: newUser.username
      },
      token: token,
      mesg: "Sign up successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something went wrong. unable to signup"
    })
  }
};

export const userSignIn = async function (req, res) {
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

    let payLoad = {
      id: isUser.id,
      email_id: isUser.email_id,
      plan_id: isUser.plan_id
    }
    let SEKRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign(payLoad, SEKRET_KEY, { expiresIn: '30d' });
    return res.status(200).json({
      user: {
        id: isUser.id,
        email: isUser.email_id,
        username: isUser.username
      },
      token: token,
      mesg: "Sign In successfully"
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something went wrong. unable to signup"
    })
  }
};

export function forgetPassword(req, res) {
  try {

    return res.status(200).json({
      msg: `Reset password email sent to ${req.body.emailVal}`
    })

  } catch (err) {
    return res.status(500).json({
      msg: "Something went wrong"
    })
  }

}

// no need of this. handle on client side
// export function logout(req, res) {
//   try {
//     const token = req.body.token;

//     black
//     res.status(200).json({
//       msg: "Logout Successfully"
//     })
//   } catch (err) {
//     return res.status(500).json({
//       msg: "Something went wrong."
//     })
//   }
// }



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

// not working
export async function emailVerificationMail(req, res) {
  const { email } = req.body;
  genratedOtp = generateOTP();
  const transporter = nodemailer.createTransport({
    // host: "live.smtp.mailtrap.io",
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: "d8d654977b245c9ecc83c028b639a111",
    },
  });

  const info = await transporter.sendMail({
    // from: "info@mailtrap.com", // sender address
    from: "mailtrap@demomailtrap.com", // sender address
    // to: email, // list of receivers
    to: "goyallucky2020@gmail.com", // list of receivers
    subject: "Verifiction email", // Subject line
    text: genratedOtp,
    html: mailFormat(), // html body
  });
}

// not working
export async function createUserPost(req, res) {
  try {
    const { title, summary, category, content, tags } = req.body;
    const filePath = req.file.path

    let isEmpty = checkEmptyFields(title, summary, category, content, filePath)

    if (isEmpty) {
      return res.status(401).json({
        msg: "Invalid user Inputs"
      })
    };

    // same for tags, consider tags as array of string check each tag string in tag table and do the same
    // create post with this constrants
    let categoryDetails = await prisma.category.findUnique({
      where: { category_name: category }
    })
    if (!categoryDetails && !categoryDetails?.length) {
      categoryDetails = await prisma.category.create({
        data: {
          category_name: category
        }
      })
    }
    const { id: userId } = req.user;
    let post = await prisma.post.create({
      data: {
        title: post,
        content: postContent,
        summary: postSummary,
        published: true,
        author_id: userId,
        // logo_url: ,
        categoryId: categoryDetails.id,
      }
    })
    console.log(req.user)
    res.status(200).json({
      msg: "Post Created Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong."
    })
  }
}

// not working
export async function deleteUserPost(req, res) {
  try {
    console.log('daskdasj')
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong."
    })
  }
}
// not working
export async function updateUserPost(req, res) {
  try {
    console.log('daskdasj')
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong."
    })
  }
}


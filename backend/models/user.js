import { DataTypes } from "sequelize";
import dbConnect from "../config/db/connection";
import Blog from "./blog";

const User = dbConnect.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: "eamil", // not working properly
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
User.hasMany(Blog, { foreignKey: "userId", onDelete: "CASCADE" });
export default User;

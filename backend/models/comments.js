import sequelize from "../config/db/connection";
import { DataTypes } from "sequelize";

const Comment = sequelize.define("comment", {
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usertype: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "guest",
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  approve: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Comment;

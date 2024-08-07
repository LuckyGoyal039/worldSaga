import sequelize from "../config/db/connection";
import { DataTypes } from "sequelize";
import Category from "./category";
import Comments from "./comments";
import Tag from "./tags";
import User from "./user";

const Blog = sequelize.define("Blog", {
  blog_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  blogTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue("tags")
        .split(",")
        .map((tag) => parseInt(tag));
    },
    set(val) {
      this.setDataValue("tags", val.join(","));
    },
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Blog.belongsTo(Category, { foreignKey: "categoryId", onDelete: "CASCADE" });
// Blog.belongsTo(Tag, { foreignKey: "tags" });

// not working
// Blog.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

Blog.hasMany(Comments, { foreignKey: "blogId", onDelete: "CASCADE" });

export default Blog;

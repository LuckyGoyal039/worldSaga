import sequelize from "../config/db/connection";
import { DataTypes } from "sequelize";

const Tag = sequelize.define("tag", {
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tagname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Tag;

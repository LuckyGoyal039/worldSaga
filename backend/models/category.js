const sequelize = require("../config/db/connection");
const { DataTypes } = require("sequelize");

const Category = sequelize.define("category", {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// check point
// Category.hasMany(Blog, { foreignKey: "categoryId", onDelete: "CASCADE" });

module.exports = Category;

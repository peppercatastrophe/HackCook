'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category)
      this.belongsTo(models.User)
      this.hasMany(models.Achievement)
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    bahan: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    idYoutube: DataTypes.STRING,
    URL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
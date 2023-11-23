'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Profile)
      this.belongsTo(models.Recipe)
    }
  }
  Achievement.init({
    ProfileId: DataTypes.INTEGER,
    RecipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Achievement',
  });
  return Achievement;
};
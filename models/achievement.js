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
    ProfileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: 'ID Profile tidak boleh kosong',
        notNull: 'ID Profile tidak boleh kosong'
      }
    },
    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: 'ID Resep tidak boleh kosong',
        notNull: 'ID Resep tidak boleh kosong'
      }
    }
  }, {
    sequelize,
    modelName: 'Achievement',
  });
  return Achievement;
};
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'Judul tidak boleh kosong',
        notNull: 'Judul tidak boleh kosong'
      }
    },
    bahan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'Bahan tidak boleh kosong',
        notNull: 'Bahan tidak boleh kosong'
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: 'Durasi tidak boleh kosong',
        notNull: 'Durasi tidak boleh kosong'
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'URL Gambar tidak boleh kosong',
        notNull: 'URL Gambar tidak boleh kosong'
      }
    },
    idYoutube: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'ID Video YouTube tidak boleh kosong',
        notNull: 'ID Video YouTube tidak boleh kosong'
      }
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'URL YouTube tidak boleh kosong',
        notNull: 'URL YouTube tidak boleh kosong'
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
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
      // this.hasMany(models.Achievement)
      this.belongsToMany(models.Profile, { through: 'Achievements' })
    }
  }
  Recipe.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Judul tidak boleh kosong'
        },
        notNull: {
          msg: 'Judul tidak boleh kosong'
        }
      }
    },
    bahan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Bahan tidak boleh kosong'
        },
        notNull: {
          msg: 'Bahan tidak boleh kosong'
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Durasi tidak boleh kosong'
        },
        notNull: {
          msg: 'Durasi tidak boleh kosong'
        },
        min: {
          args: [5],
          msg: 'Durasi minimal 5'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'URL gambar tidak boleh kosong'
        },
        notNull: {
          msg: 'URL gambar tidak boleh kosong'
        }
      }
    },
    idYoutube: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ID YouTube tidak boleh kosong'
        },
        notNull: {
          msg: 'ID YouTube tidak boleh kosong'
        }
      }
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'URL video YouTube tidak boleh kosong'
        },
        notNull: {
          msg: 'URL video YouTube tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
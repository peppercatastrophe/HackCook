'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Recipe)
      this.hasOne(models.Profile)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'E-mail tidak boleh kosong'
        },
        notEmpty: {
          msg: 'E-mail tidak boleh kosong'
        },
        isEmail: {
          msg: 'Format e-mail salah'
        }
      }},
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Password tidak boleh kosong'
        },
        min: {
          args: [8],
          msg: 'Password minimal 8 karakter'
        }
      }},
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Role tidak boleh kosong'
        },
        notEmpty: {
          msg: 'Role tidak boleh kosong'
        }
      }}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
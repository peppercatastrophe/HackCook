'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.hasMany(models.Achievement)
    }
  }
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'Nama tidak boleh kosong',
        notNull: 'Nama tidak boleh kosong'
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: 'Lokasi tidak boleh kosong',
        notNull: 'Lokasi tidak boleh kosong'
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
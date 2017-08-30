'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shoe = sequelize.define('Shoe', {
    shoeBrand: DataTypes.STRING,
    shoeName: DataTypes.STRING,
    gender: DataTypes.STRING,
    size: DataTypes.NUMBER,
    color: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shoe;
};
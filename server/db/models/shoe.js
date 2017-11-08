'use strict'

module.exports = (sequelize, DataTypes) => {
  const Shoe = sequelize.define('Shoe', {
    shoeBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shoeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foot: {
      type: DataTypes.ENUM('left', 'right'),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  })

  return Shoe
}

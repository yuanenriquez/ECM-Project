const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  // Keep the historical database column name while making it explicit in code
  // that this value is a one-way password hash, never the original password.
  passwordHash: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'password'
  }
});

module.exports = User;

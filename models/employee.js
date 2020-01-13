'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      AllowNull: false,
      primaryKey: true
    },
    naam: {
      type: DataTypes.STRING,
      AllowNull: false
    },
    email: {
      type: DataTypes.STRING,
      AllowNull: false
    },
    pincode: {
      type: DataTypes.INTEGER,
      AllowNull: false
    }
  }, {});
  Employee.associate = function(models) {
    models.Employee.hasMany(models.Item);
  };
  return Employee;
};
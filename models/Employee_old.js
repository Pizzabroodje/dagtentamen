// const Sequelize = require('sequelize');
// const sequelize = require('../utils/database')

// const Employee = sequelize.define('employee', {
//     id: {
//         type: Sequelize.BIGINT,
//         autoIncrement: true,
//         AllowNull: false,
//         primaryKey: true
//     },
//     naam: {
//         type: Sequelize.STRING,
//         AllowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         AllowNull: false
//     },
//     pincode: {
//         type: Sequelize.INTEGER,
//         AllowNull: false
//     }
// });
//
// module.exports=Employee;

'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employee', {
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
    });
    Employee.associate = function (models) {
        models.Employee.hasMany(models.Item);
    };
    return Employee;
};
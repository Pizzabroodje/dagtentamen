'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'id'
        },
      },
      wanneer: {
        type: Sequelize.DATE,
        AllowNull: false
      },
      waar: {
        type: Sequelize.STRING,
        AllowNull: false
      },
      wat: {
        type: Sequelize.STRING,
        AllowNull: false
      },
      kenmerken: {
        type: Sequelize.STRING,
        AllowNull: false
      },
      contact_station: {
        type: Sequelize.STRING,
        AllowNull: false
      },
      gevonden: {
        type: Sequelize.BOOLEAN,
        AllowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};
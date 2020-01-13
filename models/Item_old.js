'use strict';
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('item', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            AllowNull: false,
            primaryKey: true
        },
        wanneer: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        waar: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        wat: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
        kenmerken: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        contact_station: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        gevonden: {
            type: DataTypes.BOOLEAN,
            AllowNull: false
        }
    });
    Item.associate = function (models) {
        models.Item.belongsTo(models.Employee, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Item;
};
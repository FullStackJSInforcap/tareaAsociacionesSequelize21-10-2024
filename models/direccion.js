const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Direccion = sequelize.define('Direccion', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    calle: {
        type: DataTypes.STRING
    },
    numeracion: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'direcciones',
    timestamps: false
});

module.exports = Direccion;
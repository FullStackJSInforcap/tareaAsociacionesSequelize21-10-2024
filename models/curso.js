const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Curso = sequelize.define('Curso', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripción: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'cursos',
    timestamps: false
});

module.exports = Curso;
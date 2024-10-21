const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Direccion = require("./direccion");
const Curso = require("./curso");

const Estudiante = sequelize.define("Estudiante", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    rut: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
}, {
    tableName: 'estudiantes',
    timestamps: false
});

Estudiante.hasOne(Direccion, {
    foreignKey: 'estudiante_id'
});
Direccion.belongsTo(Estudiante, {
    foreignKey: {
        name: 'estudiante_id',
        allowNull: false
    }
});

Curso.hasMany(Estudiante, {
    foreignKey: 'curso_id'
});
Estudiante.belongsTo(Curso, {
    foreignKey: {
        name: 'curso_id'
    }
});

module.exports = Estudiante;
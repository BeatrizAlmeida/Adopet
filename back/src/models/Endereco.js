const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Endereco = sequelize.define('Endereco', {
    rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    complemento: {
        type: DataTypes.STRING,
    },

    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
});

Endereco.associate = function(models) {
    Endereco.hasMany(models.User);
    Endereco.hasMany(models.Animal);
}

module.exports = Endereco;
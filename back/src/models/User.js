const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    biografia: {
        type: DataTypes.TEXT,
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    timestamps: false
});

User.associate = function(models) {
    User.belongsTo(models.Endereco, {});
    User.hasMany(models.Animal, { as: 'adotados'});
    User.hasMany(models.Animal, { as: 'doados'});
    User.belongsToMany(models.Animal, {through: 'Favoritar', as: 'favoritados'});
}

module.exports = User;
const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Animal = sequelize.define('Animal', {
    especie: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    nome: {
        type: DataTypes.STRING,
    },

    idade: {
        type: DataTypes.STRING,
    },

    raca: {
        type: DataTypes.STRING,
    },

    descricao: {
        type: DataTypes.TEXT,
    },

    porte: {
        type: DataTypes.STRING,
    },
    
    foto: {
        type: DataTypes.STRING,
    }

}, {
});

Animal.associate = function(models) {
    Animal.belongsTo(models.Endereco);
    Animal.belongsTo(models.User, {as: 'adotante'});
    Animal.belongsTo(models.User, {as: 'doador'});
    Animal.belongsToMany(models.User, {through: 'Favoritar', as: 'candidatos'}); 
}

module.exports = Animal;
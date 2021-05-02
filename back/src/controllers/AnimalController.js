const Animal = require('../models/Animal');
const Endereco = require('../models/Endereco');
const sequelize = require("../config/sequelize");
const {validationResult} = require('express-validator');

const index = async(req,res) => {
    try {
        const animais = await Animal.findAll();
        return res.status(200).json({animais});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const animal = await Animal.findByPk(id);
        return res.status(200).json({animal});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    try {
        validationResult(req).throw();
        let endereco = await Endereco.findAll({
            where: {
                cep: req.body.cep,
                numero: req.body.numero,
                complemento: req.body.complemento
            }
        });

        if(!endereco){
            const newEnderecoData = {
                rua: req.body.rua,
                cep: req.body.cep,
                complemento: req.body.complemento ? req.body.complemento : null,
                numero: req.body.numero,
                bairro: req.body.bairro,
                cidade: req.body.cidade
            }

            endereco = await Endereco.create(newEnderecoData);
        }

        const newAnimalData = {
            nome: req.body.nome ? req.body.nome : null,
            idade: req.body.idade ? req.body.idade : null,
            raca: req.body.raca ? req.body.raca : null,
            porte: req.body.porte ? req.body.porte : null,
            descricao: req.body.descricao ? req.body.descricao : null,
            especie: req.body.especie,
            EnderecoId: endereco.id
        }

        const animal = await Animal.create(newAnimalData);
        return res.status(201).json({animal});
    }
    catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        validationResult(req).throw();
        const [updated] = await Animal.update(req.body, {where: {id: id}});
        console.log(updated,"UPDATED");
        if(updated) {
            const animal = await Animal.findByPk(id);
            console.log('UDPATED');
            return res.status(200).send(animal);
        } 
        throw new Error('Animal não encontrado.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Animal.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Animal deletado com sucesso.");
        }
        throw new Error ("Animal nao encontrado.");
    }catch(err){
        return res.status(500).json({err});
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}

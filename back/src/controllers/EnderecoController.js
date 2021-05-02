const Endereco = require('../models/Endereco');
const sequelize = require("../config/sequelize");
const {validationResult} = require('express-validator');

const index = async(req,res) => {
    try {
        const enderecos = await Endereco.findAll();
        return res.status(200).json({enderecos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const endereco = await Endereco.findByPk(id);
        return res.status(200).json({endereco});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    validationResult(req).throw();
    const newEnderecoData = {
        rua: req.body.rua,
        cep: req.body.cep,
        complemento: req.body.complemento ? req.body.complemento : null,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade
    }

    try {
        const endereco = await Endereco.create(newEnderecoData);
        return res.status(201).json({endereco});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    validationResult(req).throw();
    const {id} = req.params;
    try {
        const [updated] = await Endereco.update(req.body, {where: {id: id}});
        console.log(updated,"UPDATED");
        if(updated) {
            const endereco = await Endereco.findByPk(id);
            console.log('UDPATED');
            return res.status(200).send(endereco);
        } 
        throw new Error('Endereço não encontrado.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Endereco.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Endereço deletado com sucesso.");
        }
        throw new Error ("Endereço nao encontrado.");
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

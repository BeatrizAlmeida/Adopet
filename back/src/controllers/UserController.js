const User = require('../models/User');
const Auth = require('../config/auth');
const Endereco = require('../models/Endereco');
const sequelize = require("../config/sequelize");
const {validationResult} = require('express-validator');

const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({users});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    const generateHash = Auth.generateHash(req.body.senha);
    const salt = generateHash.salt;
    const hash = generateHash.hash;

    try {
        validationResult(req).throw();
        let endereco = await Endereco.findAll({
            where: {
                cep: req.body.cep,
                numero: req.body.numero,
                complemento: req.body.complemento
            }
        });

        if(endereco){
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

        const newUserData = {
            email: req.body.email,
            salt: salt,
            hash: hash,
            nome: req.body.nome,
            telefone: req.body.telefone,
            biografia: req.body.biografia ? req.body.biografia : null,
            cpf: req.body.cpf,
            EnderecoId: endereco.id
        }

        const user = await User.create(newUserData);
        return res.status(201).json({user});
    }
    catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    validationResult(req).throw();
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        console.log(updated,"UPDATED");
        if(updated) {
            const user = await User.findByPk(id);
            console.log('UDPATED');
            return res.status(200).send(user);
        } 
        throw new Error('Usu??rio n??o encontrado.');
    }catch(err){
        return res.status(500).json({err});
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usu??rio deletado com sucesso.");
        }
        throw new Error ("Usu??rio nao encontrado.");
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

const { body, param } = require("express-validator");

const validateUser = (method) =>{
	switch (method) {
        case 'create': {
            return [
                body('nome')
                    .exists().withMessage('Nome obrigatório'),
                body('email')
                    .exists().withMessage('Email obrigatório')
                    .isEmail().withMessage('Você deve inserir um email'),                
                body('cpf')
                	.exists().withMessage('O cpf é obrigatório.'),
                body('telefone')
                	.exists().withMessage('Número de contado não informado.')
                	.isNumeric().withMessage('Número de contato inválido.')
                	.isLength({min:11,max:11}).withMessage('O número de contato precisa ter 11 dígitos.'),   
            ];
        }

        case 'update': {
            return [
                body('email')
                .optional()
                .isEmail().withMessage('Você deve inserir um email'), 

                body('cpf')
                .optional(),

                body('telefone')
                .optional()
                .isNumeric().withMessage('Número de contato inválido.')
                .isLength({min:11,max:11}).withMessage('O número de contato precisa ter 11 dígitos.'),
            ];
        }
    }
}

const validateAnimal = (method) =>{
	switch (method) {
        case 'create': {
            return [
                body('especie')
                    .exists().withMessage('Especie obrigatório'),
                body('idade')
                    .optional(),
                body('raca')
                    .optional(),
            ];
        }

        case 'update': {
            return [
                body('especie')
                    .optional(),
                body('idade')
                    .optional(),
                body('raca')
                    .optional(),
            ];
        }
    }
}

const validateEndereco = (method) =>{
	switch (method) {
        case 'create': {
            return [
                body('rua')
                    .exists().withMessage('Rua obrigatório'),
                body('cep')
                    .exists().withMessage('Cep obrigatório'),                              
                body('bairro')
                	.exists().withMessage('O bairro é obrigatório.'),
                body('numero')
                	.exists().withMessage('Número não informado.')
                	.isNumeric().withMessage('Número inválido.'),                        
                body('cidade')
                    .exists().withMessage('A cidade é obrigatória.'),
            ];
        }

        case 'update': {
            return [
                body('rua')
                    .optional(),
                body('cep')
                    .optional(),                              
                body('bairro')
                    .optional(),
                body('numero')
                    .optional()
                	.isNumeric().withMessage('Número inválido.'),                        
                body('cidade')
                .optional(),            
            ];
        }
    }
}

module.exports = {
    validateUser, validateAnimal, validateEndereco
}


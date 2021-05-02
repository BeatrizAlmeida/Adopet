const { Router } = require('express');

// const { model } = require('../config/sequelize');
const multer = require('multer');
const storage = require("../config/files");
const validators = require("../config/validators");
const upload = multer({ storage: storage });

const UserController = require('../controllers/UserController');
const EnderecoController = require('../controllers/EnderecoController');
const AnimalController = require('../controllers/AnimalController');
//const AuthController = require('../controllers/AuthController');

// const passport = require('passport');
// const adminMiddleware = require('../middlewares/admin');
// const promoterMiddleware = require('../middlewares/promoter');

const router = Router();
// const allUploads = upload.fields([{ name: 'photo', maxCount: 4 }]);

// Rotas de Autenticacao
// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
// router.get('/getDetails', passport.authenticate('jwt', { session: false }), AuthController.getDetails);

// Rotas de Usuário
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.put('/users/:id',validators.validateUser('update'), UserController.update);
router.post('/users',validators.validateUser('create'), UserController.create);

// router.put('/user/follow/:id', passport.authenticate('jwt', { session: false }), UserController.followEvent);
// router.put('/user/unfollow/:id', passport.authenticate('jwt', { session: false }), UserController.unfollowEvent);
// router.put('/user/attend/:id', passport.authenticate('jwt', { session: false }), UserController.attendEvent);
router.delete('/users/:id', UserController.destroy);

// Rotas de Endereço
router.get('/enderecos', EnderecoController.index);
router.get('/enderecos/:id', EnderecoController.show);
router.post('/enderecos',validators.validateEndereco('create'), EnderecoController.create);
router.put('/enderecos/:id',validators.validateAnimal('update'), EnderecoController.update);
router.delete('/enderecos/:id', EnderecoController.destroy);

// Rotas de Animais
router.get('/pets', AnimalController.index);
router.get('/pets/:id', AnimalController.show);
router.post('/pets',upload.single('foto'),validators.validateAnimal('create'), AnimalController.create);
// router.post('/pets/photo/:id',upload.single('photo'), AnimalController.addPhoto);
router.put('/pets/:id',validators.validateAnimal('update'), AnimalController.update);
router.delete('/pets/:id', AnimalController.destroy);

module.exports = router;

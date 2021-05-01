const { Router } = require('express');
// const multer = require('multer');
// const { model } = require('../config/sequelize');
// const validators = require("../config/validators");
// const storage = require("../config/files");

const UserController = require('../controllers/UserController');
const EnderecoController = require('../controllers/EnderecoController');
const AnimalController = require('../controllers/AnimalController');
//const AuthController = require('../controllers/AuthController');

// const passport = require('passport');
// const adminMiddleware = require('../middlewares/admin');
// const promoterMiddleware = require('../middlewares/promoter');

const router = Router();
// const upload = multer({ storage: storage });
// const allUploads = upload.fields([{ name: 'photo', maxCount: 4 }]);

// Rotas de Autenticacao
// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
// router.get('/getDetails', passport.authenticate('jwt', { session: false }), AuthController.getDetails);

// Rotas de Usuário
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
// router.put('/user/follow/:id', passport.authenticate('jwt', { session: false }), UserController.followEvent);
// router.put('/user/unfollow/:id', passport.authenticate('jwt', { session: false }), UserController.unfollowEvent);
// router.put('/user/attend/:id', passport.authenticate('jwt', { session: false }), UserController.attendEvent);
router.delete('/users/:id', UserController.destroy);

// Rotas de Endereço
router.get('/enderecos', EnderecoController.index);
router.get('/enderecos/:id', EnderecoController.show);
router.post('/enderecos', EnderecoController.create);
router.put('/enderecos/:id', EnderecoController.update);
router.delete('/enderecos/:id', EnderecoController.destroy);

// Rotas de Animais
router.get('/pets', AnimalController.index);
router.get('/pets/:id', AnimalController.show);
router.post('/pets', AnimalController.create);
router.put('/pets/:id', AnimalController.update);
router.delete('/pets/:id', AnimalController.destroy);

module.exports = router;

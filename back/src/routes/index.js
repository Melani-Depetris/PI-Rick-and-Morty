const express = require('express');
const router = express.Router();

const getCharById = require('../controllers/getCharById');
// const { postFav, deleteFav } = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')


router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/login', postUser)

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = router;
// myRouter.js
const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

// Rutas relacionadas con películas
router.post('/agregarPelicula', myController.agregarPelicula);

// Rutas relacionadas con listas de reproducción
router.post('/crearPlaylist', myController.crearPlaylist);
router.get('/obtenerPlaylist', myController.obtenerPlaylist);
router.put('/moverPelicula', myController.moverPelicula);  // Puedes cambiar el verbo HTTP según tus necesidades
router.delete('/borrarPlaylist', myController.borrarPlaylist);

// Agrega más rutas según sea necesario

module.exports = router;

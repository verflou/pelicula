const myController = require("../controllers/myController");
const express = require("express");
const router = express.Router();

//Defino rutas y acciones de respuesta
router.route("/").get(myController.inicio);
router.route("/crearPlaylist").get(myController.inicio);
router.route("/obtenerPlaylist").get(myController.inicio);
router.route("/borrarPlaylist").get(myController.inicio);
router.route("/agregarPelicula").get(myController.inicio);
router.route("/moverPelicula").get(myController.inicio);
router.route("/borrarPelicula").get(myController.inicio);

module.exports = router;


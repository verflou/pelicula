// myController.js
const axios = require('axios');
const Movie = require('../models/myModel');

exports.obtenerPelicula = async (tituloPelicula) => {
  const claveAPI = 'b15c932e';
  const urlAPI = `http://www.omdbapi.com/?apikey=${claveAPI}&t=${encodeURIComponent(tituloPelicula)}`;

  try {
    const respuesta = await axios.get(urlAPI);
    return respuesta.data;
  } catch (error) {
    console.error('Error al obtener detalles de la película:', error.message);
    throw error;
  }
}

exports.agregarPelicula = async (req, res) => {
  try {
    const tituloPelicula = req.body.titulo;
    const detallesPelicula = await obtenerDetallesPelicula(tituloPelicula);

    const nuevaPelicula = new Movie({
      titulo: detallesPelicula.Title,
      año: detallesPelicula.Year,
      // Añade otros campos según sea necesario
    });

    await nuevaPelicula.save();

    res.status(200).json({ mensaje: 'Película agregada exitosamente' });
  } catch (error) {
    console.error('Error al agregar la película:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.obtenerPlaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find();

    res.status(200).json({ playlists });
  } catch (error) {
    console.error('Error al obtener las playlists:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



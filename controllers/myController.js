const { default: mongoose } = require('mongoose');
const models = require('../models/myModel');

const newmodel = new models({
  nombre: 'joaquin',
  edad: '19',
});

newmodel
  .save()
  .then(() => {
    console.log('Documento guardado');
  })
  .catch((error) => {
    console.log(error);
  });

models
  .findByIdAndDelete('64628056be2403f643c8dc80')
  .then((modelEliminado) => {
    console.log('Documento eliminado correctamente', modelEliminado);
  })
  .catch((error) => {
    console.log(error);
  });

models
  .find()
  .then((documentos) => {
    console.log('Documentos encontrados:', documentos);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    mongoose.connection.close();
  });

  models.findByIdAndUpdate(('646254a7e30fce64a72378a7'),
    { nombre: 'Nuevo nombre', edad: '20' },
    { new: true } // Opcional: devuelve el documento modificado en lugar del original
  )
  .then((documentoModificado) => {
    console.log('646254a7e30fce64a72378a7', documentoModificado);
  })
  .catch((error) => {
    console.log(error);
  });

exports.inicio = (req, res) => {
  res.status(200).render("home.ejs");
};
exports.crearPlaylist = (req, res) => {
  res.status(200).render("home.ejs");
};
exports.obtenerPlaylist = (req, res) => {
  res.status(200).render("home.ejs");
};
exports.borrarPlaylist = (req, res) => {
  res.status(200).render("home.ejs");
};
exports.agregarPelicula = (req, res) => {
  res.status(200).render("home.ejs");
};
exports.moverPelicula = (req, res) => {
  res.status(200).render("home.ejs");

};
exports.borrarPelicula = (req, res) => {
  res.status(200).render("home.ejs");

};




// myModel.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  año: {
    type: Number,
  },
  // Puedes agregar más campos según sea necesario
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

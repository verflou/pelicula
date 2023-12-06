// playlistModel.js
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  peliculas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  }],
  // Puedes agregar más campos según sea necesario
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;

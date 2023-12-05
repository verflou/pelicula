//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const esquema = new mongoose.Schema({
    nombre: {
        type: String },
    edad: {
        type: Number,
        required: [true],
    }
});

//Creación del modelo Post
const Post = mongoose.model('Post', esquema);

module.exports = Post;

 
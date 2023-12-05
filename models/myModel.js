//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const esquema = new mongoose.Schema({
    Titulo: {
        type: String,
        required: [true] 
    },
    Autor: {
        type: String,
        required: [true],
    },
    Año: {
        type: Number,
        required: [true],
    },
    Categoria: {
        type: String,
        required: [true],
    }
});

//Creación del modelo Post
const Post = mongoose.model('Post', esquema);

module.exports = Post;


// index.js o app.js (nombre sugerido para el archivo principal)
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");  // Importa la instancia de la aplicación desde app.js
const apiRouter = require("./routes/myRouter");

// Conexión a la base de datos
mongoose.connect('mongodb+srv://joaquin:Js46845585@basedd.m4bxt9j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para manejar el cuerpo de la solicitud (parsing JSON)
app.use(express.json());

// Usar el enrutador de la API
app.use("/myRouter", apiRouter);

// Puerto en el que escucha el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

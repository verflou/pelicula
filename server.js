const app = require("./app");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joaquin:Js46845585@basedd.m4bxt9j.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
    app.listen(3006, () => {
        console.log('Servidor corriendo en el puerto 3006');
    });
}).catch(err => {
   console.log('Error al conectar a MongoDB Atlas:', err)
   process.exit(1)
 } );

// Exporta la instancia de mongoose después de la conexión
module.exports = mongoose;

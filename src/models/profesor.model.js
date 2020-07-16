;
'use stric'

const { Schema, model } = require('mongoose');


const ProfesorSchema = new Schema ({

    nombre: String,
    apellido: String,
    email: String,
    passw: String,
    imagePath: String


})


module.exports = model('profesores', ProfesorSchema);
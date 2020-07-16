const usuarios = require('../../models/usuario.model');

module.exports = {
    getUsuarios: async () => {
        let usuario
        try {
            usuario = await usuarios.find();
        } catch (error) {
            console.log(error)
        }
        return usuarios
    },

    getUsuario: async (_, {_id}) => { 
        let usuario
        try {
            usuario = await usuarios.findById({_id})
        } catch (error) {
            console.log(error)
        }
        return usuario
    }

};
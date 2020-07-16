const usuarios = require ('../../models/usuario.model');

module.exports = {
    async createUsuario(_, { input }){
        const newUsuario = new usuarios(input)
        await newUsuario.save()
        return newUsuario
    },

    async updateUsuario(_, {_id, input}){
        return await usuarios.findByIdAndUpdate(_id, input, {new: true})
    },
    
   
}
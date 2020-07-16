const profesores = require('../../models/usuario.model');

module.exports = {
    getProfesores: async () => {
        let profesor;
        try {
            profesor = await profesores.find();
        } catch (error) {
            console.log(error)
        }
        return profesors;
    },

    getProfesor: async (_, {_id}) => {
        let profesor;
        try {
            profesor = await profesores.findById({_id})
        } catch (error) {
            console.log(error)
        }
        return profesor;
    }

};
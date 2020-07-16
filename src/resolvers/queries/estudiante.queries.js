const estudiantes = require ('../../models/estudiante.model');

module.exports = {
    getEstudiantes: async () => {
        let estudiante;
        try {
            estudiante = await estudiantes.find();
        } catch (error) {
            console.log(error)
        }
        return estudiantes;
    },

    getEstudiante: async (_, {_id}) => {
        let estudiante;
        try {
            estudiante = await estudiantes.findById({_id})
        } catch (error) {
            console.log(error)
        }
        return estudiante;
    }

};
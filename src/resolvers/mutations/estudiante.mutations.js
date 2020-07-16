const estudiantes = require ('../../models/estudiante.model');

module.exports = {
    async createEstudiante(_, { input }){
        const newEstudiante = new estudiantes(input)
        await newEstudiante.save()
        return console.log(newEstudiante) 
        
    },

    async updateEstudiante(_, {_id, input}){
        return await estudiantes.findByIdAndUpdate(_id, input, {new: true})
    },
    
   
}
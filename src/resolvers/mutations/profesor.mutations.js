const profesores = require ('../../models/profesor.model');

module.exports = {
    async createProfesor(_, { input }){
        const newProfesor = new profesores(input)
        await newProfesor.save()
        return newProfesor
    },

    async updateProfesor(_, {_id, input}){
        return await profesores.findByIdAndUpdate(_id, input, {new: true})
    },
    
   
}
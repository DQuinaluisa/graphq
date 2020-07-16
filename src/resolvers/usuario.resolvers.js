const usuarioQueries = require('./queries/usuario.queries');
const  usuarioMutations = require('./mutations/usuario.mutations');
  

module.exports = {
  Query: usuarioQueries,
  Mutation: usuarioMutations,
  
};
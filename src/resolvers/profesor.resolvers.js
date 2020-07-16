const profesorQueries = require('./queries/profesor.queries');
const    profesorMutations = require('./mutations/profesor.mutations');

module.exports = {
  Query: profesorQueries,
  Mutation: profesorMutations
   
};
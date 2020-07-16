const { makeExecutableSchema } = require('graphql-tools'),
  { join } = require('path'),
  { readFileSync } = require('fs'),
  usuarioResolver = require('../resolvers/usuario.resolvers'),
  estudianteResolver = require('../resolvers/estudiante.resolvers'),
  profesorResolver = require('../resolvers/profesor.resolvers'),  
  typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf-8'),
  schema = makeExecutableSchema({
    typeDefs,
    resolvers: [usuarioResolver, estudianteResolver, profesorResolver],
  });

module.exports = { schema };  
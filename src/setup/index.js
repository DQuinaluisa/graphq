;
'use strict'

const port = process.env.PORT || 3000,
      app  = require('./app'),
      { appConfig, db } = require('../config'),
      connetDb = require('../db/data'),
      { graphqlHTTP } = require('express-graphql'),
      { schema } = require('../schemas/schemaConfig')
      connetDb(db);

      app.use('/graphql', graphqlHTTP ({
        schema: schema,
        graphiql: true
      })
    );

      app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
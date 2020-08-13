const express = require('express');
const yaml = require("yamljs");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = yaml.load('./api/swagger/swagger.yaml');

// internal modules
const getRecipes = require('./api/controllers/recipe')

// Create  app and server with swagger documentation
const app = express();
app.listen(10010);
const options = {
    explorer: true,
  };

  // Let's route to various controllers
app.use('/v1/recipes', getRecipes);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// serve the app
console.log("Serving at http://localhost:10010/api/")


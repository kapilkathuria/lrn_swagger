const express = require('express');
const yaml = require("yamljs");
const swaggerUi = require('swagger-ui-express');

// internal modules
const getRecipes = require('./api/controllers/recipe')
const auth = require('./api/controllers/auth')
const swaggerDocument = yaml.load('./api/swagger/swagger.yaml');

// Create  app and server with swagger documentation
const app = express();
app.listen(10010);

const options = {
  explorer: true,
  swaggerOptions: {
    authAction :{ 
      JWT: {
        name: "JWTAuth", 
        schema: {
          type: "apiKey", 
          in: "header", 
          name: "Authorization", 
          description: ""
        }, 
        value: "Bearer <JWT>"
      } 
    }
  }
};

const config = {
  appRoot: __dirname,
  swaggerSecurityHandlers:{
    JWTAuth: auth.verifyToken
  }
}

  // Let's route to various controllers
app.use('/v1/recipes', getRecipes);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument, config));

// serve the app
console.log("Serving at http://localhost:10010/api/")


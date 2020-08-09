const express = require('express');
const yaml = require("yamljs");
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = yaml.load('./api/swagger/swagger.yaml');

const app = express();

app.listen(10010);

const options = {
    explorer: true,
  };
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


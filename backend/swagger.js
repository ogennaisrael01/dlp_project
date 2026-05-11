import swaggerAutogen from 'swagger-autogen';
import "dotenv/config"

const doc = {
  info: { },
  host: `${process.env.HOSTNAME}:${process.env.PORT}`
};

const outputFile = './swagger-out.json';
const routes = ['./app.js']; 

swaggerAutogen()(outputFile, routes);
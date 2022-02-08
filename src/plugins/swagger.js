const HapiSwagger = require('hapi-swagger');

const Package = require('../../package.json');

const swaggerOptions = {
  info: {
    title: 'Hapi Api',
    version: Package.version
  }
};

module.exports = {
  plugin: HapiSwagger,
  options: swaggerOptions
};
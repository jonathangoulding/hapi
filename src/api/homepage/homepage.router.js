const { homepage } = require('./homepage.controller')

module.exports = {
    homepage: {
    method: 'GET',
    path: '/',
    handler: homepage
    }
};
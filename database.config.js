const knex = require('knex')({
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'password',
      database : 'bookStore',
      charset  : 'utf8'
    }
  })
   

module.exports.knex = knex;

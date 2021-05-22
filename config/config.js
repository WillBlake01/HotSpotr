module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": "hotspotr",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306,
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": "hotspotr_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": process.env.DATABASE_PRODUCTION,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

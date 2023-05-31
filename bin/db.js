const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '4l4n*D4m14n',
    database : 'prueba'
});

module.exports = connection;

const mysql = require('mysql');

const {promisify} = require('util');

const { database } = require('./keys')

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('DATABASE CONNECTION WAS LOST');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.log('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.log('DATABASE CONECTION WAS REFUSED');
        }
        console.log(err.code, 'perro');
    }

    if (connection) connection.release();
    console.log('DB is connected')
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;
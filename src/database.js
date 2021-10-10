const mysql = require('mysql2');

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

    if (connection) {
        connection.query("CREATE DATABASE IF NOT EXISTS database_max;");
        connection.query("USE database_max;");
        connection.query("CREATE TABLE IF NOT EXISTS copywriting( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cw_name VARCHAR(255) NOT NULL );");
        connection.query("CREATE TABLE IF NOT EXISTS words( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cw_id int(255) NOT NULL, word VARCHAR(255) NOT NULL, CONSTRAINT fk_words FOREIGN KEY (cw_id) REFERENCES copywriting(id) );");
        connection.query("CREATE TABLE IF NOT EXISTS topics( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, topic_name VARCHAR(255) NOT NULL );");
        connection.query("CREATE TABLE IF NOT EXISTS key_ideas( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ki_id int(255) NOT NULL, idea VARCHAR(255) NOT NULL, CONSTRAINT fk_idea FOREIGN KEY (ki_id) REFERENCES topics(id) );");
        pool.releaseConnection(connection);
    }
    console.log('DB is connected')
    return;
})

pool.query = promisify(pool.query);

module.exports = pool;
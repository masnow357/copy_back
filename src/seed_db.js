const pool = require('./database');

module.exports = {
    seedDb: async () => {
        await pool.query("CREATE DATABASE IF NOT EXISTS database_max;");
        await pool.query("USE database_max;");
        await pool.query("CREATE TABLE IF NOT EXISTS copywriting( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cw_name VARCHAR(255) NOT NULL );");
        await pool.query("INSERT IGNORE INTO copywriting(id, cw_name) VALUES(1, 'test cw1');");
        await pool.query("INSERT IGNORE INTO copywriting(id, cw_name) VALUES(2, 'test cw2');");
        await pool.query("CREATE TABLE IF NOT EXISTS words( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cw_id int(255) NOT NULL, word VARCHAR(255) NOT NULL, CONSTRAINT fk_words FOREIGN KEY (cw_id) REFERENCES copywriting(id) );");
        await pool.query("INSERT IGNORE INTO words(id, cw_id, word) VALUES(1, 1, 'lorem');");
        await pool.query("INSERT IGNORE INTO words(id, cw_id, word) VALUES(2, 1, 'ipsum');");
        await pool.query("INSERT IGNORE INTO words(id, cw_id, word) VALUES(3, 2, 'jojojo');");
        await pool.query("CREATE TABLE IF NOT EXISTS topics( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, topic_name VARCHAR(255) NOT NULL );");
        await pool.query("INSERT IGNORE INTO topics(id, topic_name) VALUES(1, 'this is a testopic');");
        await pool.query("INSERT IGNORE INTO topics(id, topic_name) VALUES(2, 'this is anothertopic');");
        await pool.query("INSERT IGNORE INTO topics(id, topic_name) VALUES(3, 'otrotopic');");
        await pool.query("CREATE TABLE IF NOT EXISTS key_ideas( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ki_id int(255) NOT NULL, idea VARCHAR(255) NOT NULL, CONSTRAINT fk_idea FOREIGN KEY (ki_id) REFERENCES topics(id) );");
        await pool.query("INSERT IGNORE INTO key_ideas(id, ki_id, idea) VALUES(1, 1, 'this is an idea');");
        await pool.query("INSERT IGNORE INTO key_ideas(id, ki_id, idea) VALUES(2, 1, 'idea dos');");
    }
}

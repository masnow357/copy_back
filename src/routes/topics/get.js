const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.get('/', async (req, res) => {
    
    const topics = await pool.query("SELECT * FROM topics");

    res.json(topics);

})

router.get('/key_ideas', async (req, res) => {
    
    let key_ideas = await pool.query("SELECT * FROM key_ideas");

    key_ideas = await Promise.all(
        key_ideas.map(async word => {
           const tp = await pool.query("SELECT topic_name FROM topics WHERE id = ?", [word.ki_id]);
           word.tp = tp[0].topic_name
           console.log(word);
           return word;
       })
    )
    
    res.json(key_ideas);

})

router.get('/key_ideas/:id', async (req, res) => {
    const {id} = await req.params;
    const key_ideas_by_id = await pool.query("SELECT * FROM key_ideas WHERE ki_id = ?", [id]);
    
    res.json(key_ideas_by_id);

})

module.exports = router;
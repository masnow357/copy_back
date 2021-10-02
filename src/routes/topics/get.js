const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.get('/', async (req, res) => {
    
    const topics = await pool.query("SELECT * FROM topics");

    res.json(topics);

})

router.get('/key_ideas', async (req, res) => {
    
    const key_ideas = await pool.query("SELECT * FROM key_ideas");
    
    res.json(key_ideas);

})

router.get('/key_ideas/:id', async (req, res) => {
    const {id} = await req.params;
    const key_ideas_by_id = await pool.query("SELECT * FROM key_ideas WHERE ki_id = ?", [id]);
    
    res.json(key_ideas_by_id);

})

module.exports = router;
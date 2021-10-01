const express = require('express');

const router = express.Router();

const pool = require('../database');

// POR COPYWRITING

// get

router.get('/copywriting', async (req, res) => {
    
    const copywriting = await pool.query("SELECT * FROM copywriting");

    res.json(copywriting);

})

router.get('/words', async (req, res) => {
    
    const words = await pool.query("SELECT * FROM words");
    
    res.json(words);

})

router.get('/words/:id', async (req, res) => {
    const {id} = await req.params;
    const words_by_id = await pool.query("SELECT * FROM words WHERE cw_id = ?", [id]);
    
    res.json(words_by_id);

})

// post

router.post('/copywritingPost/:value', async (req, res) => {

    const {value} = await req.params;

    const copywriting = await pool.query("INSERT INTO copywriting (cw_name) VALUE(?)", [value]);

    copywriting.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.post('/wordsPost/:cw_id/:value', async (req, res) => {

    const {value} = await req.params;

    const {cw_id} = await req.params;

    const words = await pool.query("INSERT INTO words (cw_id, word) VALUE(?, ?)", [cw_id, value]);

    words.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

// put


// POR TEMA

// get

router.get('/topics', async (req, res) => {
    
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
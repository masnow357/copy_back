const express = require('express');

const router = express.Router();

const pool = require('../database');

router.get('/copywriting', async (req, res) => {
    
    const copywriting = await pool.query("SELECT * FROM copywriting");
    
    //res.json(copywriting);

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

module.exports = router;
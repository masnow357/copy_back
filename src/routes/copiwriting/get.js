const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.get('/', async (req, res) => {
    
    const copywriting = await pool.query("SELECT * FROM copywriting");

    res.json(copywriting);

})

router.get('/words', async (req, res) => {
    
    let words = await pool.query("SELECT * FROM words");

    words = await Promise.all(
        words.map(async word => {
           const cw = await pool.query("SELECT cw_name FROM copywriting WHERE id = ?", [word.cw_id]);
           word.cw = cw[0].cw_name
           return word;
       })
    )

    res.json(words)

})

router.get('/words/:id', async (req, res) => {
    const {id} = await req.params;
    const words_by_id = await pool.query("SELECT * FROM words WHERE cw_id = ?", [id]);
    
    res.json(words_by_id);

})

module.exports = router;
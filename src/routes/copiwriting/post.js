const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.post('/:value', async (req, res) => {

    const {value} = await req.params;

    const copywriting = await pool.query("INSERT INTO copywriting (cw_name) VALUE(?)", [value]);

    copywriting.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.post('/words/:cw_id/:value', async (req, res) => {

    const {value, cw_id} = await req.params;

    const words = await pool.query("INSERT INTO words (cw_id, word) VALUE(?, ?)", [cw_id, value]);

    words.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

module.exports = router;
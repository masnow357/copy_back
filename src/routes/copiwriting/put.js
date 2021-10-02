const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.put('/copywritingPut/:id/:value', async (req, res) => {
    const {value, id} = req.params;

    const copywriting = await pool.query("UPDATE copywriting SET cw_name = ? WHERE id = ?", [value, id.toString()]);

    copywriting.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.put('/wordsPut/:id/:cw_id/:word', async (req, res) => {
    const {id, cw_id, word} = await req.params;

    const words = await pool.query("UPDATE words SET cw_id = ?, word = ? WHERE id = ?", [cw_id, word, id.toString()]);

    words.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

module.exports = router;
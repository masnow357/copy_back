const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.delete('/copywritingDelete/:id', async (req, res) => {

    const {id} = req.params;

    const copywriting = await pool.query("DELETE FROM copywriting WHERE id = ?", [id.toString()]);

    copywriting.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.delete('/wordsDelete/:id', async (req, res) => {
    
    const {id} = req.params;

    const words = await pool.query("DELETE FROM words WHERE id = ?", [id.toString()]);

    words.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

module.exports = router;
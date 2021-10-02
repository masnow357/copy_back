const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.put('/:id/:value', async (req, res) => {
    const {value, id} = req.params;

    const topics = await pool.query("UPDATE topics SET topic_name = ? WHERE id = ?", [value, id.toString()]);

    topics.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.put('/key_ideas/:id/:ki_id/:idea', async (req, res) => {
    const {id, ki_id, idea} = await req.params;

    const key_ideas = await pool.query("UPDATE key_ideas SET ki_id = ?, idea = ? WHERE id = ?", [ki_id, idea, id.toString()]);

    key_ideas.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})


module.exports = router;
const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.post('/:value', async (req, res) => {

    const {value} = await req.params;

    const topics = await pool.query("INSERT INTO topics (topic_name) VALUE(?)", [value]);

    topics.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

router.post('/key_ideas/:ki_id/:value', async (req, res) => {

    const {value, ki_id} = await req.params;

    const key_ideas = await pool.query("INSERT INTO key_ideas (ki_id, idea) VALUE(?, ?)", [ki_id, value]);

    key_ideas.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})


module.exports = router;
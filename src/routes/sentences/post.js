const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.post('/page_angle/:value', async (req, res) => {
    
    const {value} = await req.params;

    const data = await pool.query("INSERT INTO page_angle (angle) VALUE(?)", [value]);

    res.json(data);

})

router.post('/page_category/:value', async (req, res) => {
    
    const {value} = await req.params;

    const data = await pool.query("INSERT INTO page_category (category) VALUE(?)", [value]);

    res.json(data);

})

router.post('/page_notion/:value', async (req, res) => {
    
    const {value} = await req.params;

    const data = await pool.query("INSERT INTO page_notion (notion) VALUE(?)", [value]);

    res.json(data);

})

router.post('/page_topic/:value', async (req, res) => {
    
    const {value} = await req.params;

    const data = await pool.query("INSERT INTO page_topic (topic) VALUE(?)", [value]);

    res.json(data);

})

module.exports = router;
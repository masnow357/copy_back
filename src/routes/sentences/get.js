const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.get('/page_angle', async (req, res) => {
    
    const data = await pool.query("SELECT * FROM page_angle");

    res.json(data);

})

router.get('/page_category', async (req, res) => {
    
    const data = await pool.query("SELECT * FROM page_category");

    res.json(data);

})

router.get('/page_notion', async (req, res) => {
    
    const data = await pool.query("SELECT * FROM page_notion");

    res.json(data);

})

router.get('/page_topic', async (req, res) => {
    
    const data = await pool.query("SELECT * FROM page_topic");

    res.json(data);

})

module.exports = router;
const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.put('/page_angle/:id/:value', async (req, res) => {
    
    const {id, value} = await req.params;

    const data = await pool.query("UPDATE page_angle SET angle = ? WHERE id = ?", [value, id]);

    res.json(data);

})

router.put('/page_category/:id/:value', async (req, res) => {
    
    const {id, value} = await req.params;

    const data = await pool.query("UPDATE page_category SET category = ? WHERE id = ?", [value, id]);

    res.json(data);

})

router.put('/page_notion/:id/:value', async (req, res) => {
    
    const {id, value} = await req.params;

    const data = await pool.query("UPDATE page_notion SET notion = ? WHERE id = ?", [value, id]);

    res.json(data);

})

router.put('/page_topic/:id/:value', async (req, res) => {
    
    const {id, value} = await req.params;

    const data = await pool.query("UPDATE page_topic SET topic = ? WHERE id = ?", [value, id]);

    res.json(data);

})

module.exports = router;
const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.delete('/page_angle/:id', async (req, res) => {
    
    const {id} = await req.params;

    const data = await pool.query("DELETE FROM page_angle WHERE id = ?", [id]);

    res.json(data);

})

router.delete('/page_category/:id', async (req, res) => {
    
    const {id} = await req.params;

    const data = await pool.query("DELETE FROM page_category WHERE id = ?", [id]);

    res.json(data);

})

router.delete('/page_notion/:id', async (req, res) => {
    
    const {id} = await req.params;

    const data = await pool.query("DELETE FROM page_notion WHERE id = ?", [id]);

    res.json(data);

})

router.delete('/page_topic/:id', async (req, res) => {
    
    const {id} = await req.params;

    const data = await pool.query("DELETE FROM page_topic WHERE id = ?", [id]);

    res.json(data);

})

module.exports = router;
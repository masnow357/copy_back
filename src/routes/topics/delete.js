const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {

        const key_ideas = await pool.query("DELETE FROM key_ideas WHERE ki_id = ?", [id.toString()]);
        const topics = await pool.query("DELETE FROM topics WHERE id = ?", [id.toString()]);

        key_ideas.serverStatus == 2 && topics.serverStatus == 2 ? res.send('OK') : res.send('ERROR');

    } catch (error) {
        
        console.log(error);
        
    }

    

})

router.delete('/key_ideas/:id', async (req, res) => {
    
    const {id} = req.params;

    const key_ideas = await pool.query("DELETE FROM key_ideas WHERE id = ?", [id.toString()]);

    key_ideas.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})


module.exports = router;
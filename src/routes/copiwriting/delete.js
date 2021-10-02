const express = require('express');

const router = express.Router();

const pool = require('../../database');

router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {

        const words = await pool.query("DELETE FROM words WHERE cw_id = ?", [id.toString()]);
        const copywriting = await pool.query("DELETE FROM copywriting WHERE id = ?", [id.toString()]);

        words.serverStatus == 2 && copywriting.serverStatus == 2 ? res.send('OK') : res.send('ERROR');

    } catch (error) {
        
        console.log(error);
        
    }

    

})

router.delete('/words/:id', async (req, res) => {
    
    const {id} = req.params;

    const words = await pool.query("DELETE FROM words WHERE id = ?", [id.toString()]);

    words.serverStatus == 2 ? res.send('OK') : res.send('ERROR');
})

module.exports = router;
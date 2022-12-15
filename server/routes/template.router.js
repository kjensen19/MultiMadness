const express = require('express');
const router = express.Router()
const axios = require('axios');


router.get('/api/test', (req, res) => {
    try{
       const queryText = `
        SELECT * from "test"
            WHERE "id=$1;
       `
       const queryVal = ['1']
       pool.query(queryText, queryVal)
        .then((dbRes) =>{
            res.send(dbRes.rows[0])
        }
        )
    }catch(error){
        console.log('Error in test GET', error)
        res.sendStatus(500)
    }
})

module.exports = router
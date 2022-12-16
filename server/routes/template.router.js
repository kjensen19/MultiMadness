const express = require('express');
const router = express.Router()
const pool = require('../modules/pool');
const axios = require('axios');

//Test get route
router.get('/', (req, res) => {
    console.log('here?')
    try{
        //Select everyting from table with id 1
       const queryText = `
        SELECT * from "test"
            WHERE "id"=$1;
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
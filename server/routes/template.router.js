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

router.post('/', (req, res) => {
    console.log('in Post');
    try{
        const queryText = `
        INSERT INTO "test"
        ("name", "number", "time", "date")
        VALUES($1, $2, $3, $4)
        `

        const queryVal = ['Kyle', '5', '7', '12/26/2022']
        pool.query((dbRes) => {
            console.log('Made it!')
            res.sendStatus(200)
        })
    }catch(error){
        console.log('Error in POST', error)
        res.sendStatus(500)
    }
})

module.exports = router
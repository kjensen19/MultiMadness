//require and intialize Express
const express = require('express');
const app = express();
//for processing JSON
const bodyParser = require('body-parser');

//constants for router files here
// const  = require('./routes/')
    const testRouter = require('./routes/template.router')

//listens for axios requests
// app.use('api//', w/e)
    app.use('/api/test', testRouter)

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//for what we always have on page
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
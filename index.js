const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Helllooooo');
});
//start the web server on port 3000 
app.listen(3000, ()=> console.log('hi from terminal'));

//map HTTP calls to specific URLs to corresponding code
const routes = require('./routes');
routes.configure(app);

//initialize the DB connection
const db = require('./connection');
db.init();
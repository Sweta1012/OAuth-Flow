const express = require('express');
const passportSetup = require('./config/passport-setup');

const app = express();

//set up view engine

app.set('view engine', 'ejs');

//create home route

app.get('/', (req, res) => {
    res.render('home'); //render the home template from views
});

app.listen(3000, () => {
    console.log("app listening on port 3000");
});

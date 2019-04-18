const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const articleController = require('./controllers/articles');
const authorController = require('./controllers/authors');
require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const port = 3000;
app.listen(port, () => {
    console.log("I'm listening to everything...always.");
});
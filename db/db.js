const mongoose = require('mongoose');
const Article = require('../models/articles');
const Author = require('../models/authors');
const articleData = require('../populateArticles');
const authorsData = require('../populateAuthors');

const connectionString = 'mongodb://localhost/blog';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose error: ${error}`);
});


// Author.collection.insertMany(authorsData, (err, data) => {
//     console.log('added data authors');
//     mongoose.connection.close();
// });
// Article.collection.insertMany(articleData, (err, data) => {
//     console.log('inserted data articles');
//     mongoose.connection.close();
// });

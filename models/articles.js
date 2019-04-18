const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {type: String, required: true,},
    image: String,
    date: Date,
    content: {type: String, required: true,},
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
const express = require('express');
const router = express.Router();
const Article = require('../models/articles');

// index route
router.get('/', (req, res) => [
    Article.find({}, (error, allArticlesDB) => {
      if(error) {
        res.send(error)
        console.log(error);
      } else {
        res.render('articles/index.ejs', {Article: allArticlesDB})
      }
    })
  ]);

  // new route
  router.get('/new', (req, res) => {
    res.render('articles/new.ejs')
  });

  // create route
  router.post('/', (req, res) => {
    Article.create(req.body, (err, newArticle) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/articles')
      }
    })
  });

  // edit route
  router.get('/:id/edit', (req, res) => {
    Article.findById(req.params.id, (err, returnArticle) => {
      if (err) {
        res.send(err);
      } else {
        res.render('articles/edit.ejs', {
          Article: returnArticle,
        })
      }
    })
  })

  // update route
  router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, (err, updatedArticle) => {
      if (err) {
        res.send(err);
      } else {
        updatedArticle = req.body;
        console.log(updatedArticle);
        res.redirect('/articles')
      }
    })
  });

  // delete
  router.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/articles');
      }
    })
  });

  // show route
  router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, returnArticle) => {
      if (err){
        res.send(err);
      } else {
        res.render('articles/show.ejs', {
          Article: returnArticle,
        })
      }
    })
  });

module.exports = router;
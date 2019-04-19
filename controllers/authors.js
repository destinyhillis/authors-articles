const express = require('express');
const router = express.Router();
const Author = require('../models/authors');

// index route
router.get('/', (req, res) => [
    Author.find({}, (error, allAuthorsDB) => {
      if(error) {
        res.send(error)
        console.log(error);
      } else {
        res.render('authors/index.ejs', {authors: allAuthorsDB})
      }
    })
  ]);

  // new route
  router.get('/new', (req, res) => {
    res.render('authors/new.ejs')
  });

  // create route
  router.post('/', (req, res) => {
    Author.create(req.body, (err, newAuthor) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/authors')
      }
    })
  });

  // edit route
  router.get('/:id/edit', (req, res) => {
    Author.findById(req.params.id, (err, returnAuthor) => {
      if (err) {
        res.send(err);
      } else {
        res.render('authors/edit.ejs', {
          author: returnAuthor,
        })
      }
    })
  })

  // update route
  router.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, (err, updatedAuthor) => {
      if (err) {
        res.send(err);
      } else {
        updatedAuthor = req.body;
        res.redirect('/authors')
      }
    })
  });

  // delete
  router.delete('/:id', (req, res) => {
    Author.findByIdAndDelete(req.params.id, (err, deletedAuthor) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/authors');
      }
    })
  });

  // show route
  router.get('/:id', (req, res) => {
    Author.findById(req.params.id, (err, returnAuthor) => {
      if (err){
        res.send(err);
      } else {
        res.render('authors/show.ejs', {
          author: returnAuthor,
        })
      }
    })
  });

  module.exports = router;
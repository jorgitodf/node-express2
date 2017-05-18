var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/', function(req, res, next) {
    db.Books.findAll()
            .then(function(result){
                res.render('books', {
                    books: result
                });
            })
            .catch(function(err){
                console.log('ERROR ', err);
            });
});

router.get('/create', function(req, res, next) {
    db.Authors.findAll()
            .then(function(result){
                res.render('new_books', {
                    authors: result
                });
            })
            .catch(function(err){
                console.log('ERROR ', err);
            });
});

router.get('/count', function(req, res, next) {
    db.Books.findAndCountAll({
        where: {
            name: 'Jorgito'
        },
    })
    .then(function(result){
        console.log(result.count);
        console.log(result.rows);
    });
});

router.post('/', function(req, res, next) {
    // db.Books.findOrCreate({
    //     where: {
    //         name: req.body.name
    //     },
    //     defaults: req.body
    // })
    // .spread(function(book, bookCreated){
    //     console.log('Book => ', book);
    //     console.log('Book Created => ', bookCreated);
    // });
    db.Books.create(req.body)
            .then(function(result){
                res.redirect('/books');
            })
            .catch(function(err){
                console.log('ERROR ', err);
            });
});

module.exports = router;

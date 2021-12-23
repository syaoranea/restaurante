var conn = require('./../inc/db');

var express = require('express');
const users = require('../inc/users');
var router = express.Router();

router.get('/', function(req, res, next) {
 
    /* GET home page. */
    
    res.render('admin/index', {
        title: 'Painel Administrativo'
        });
});

router.get('/contacts', function(req, res, next) {
    
    res.render('admin/contacts', {
        title: 'Painel Administrativo'
        });
});

router.get('/emails', function(req, res, next) {
    
    res.render('admin/emails', {
        title: 'Painel Administrativo'
        });
});

router.get('/login', function(req, res, next) {
    
    res.render('admin/login', {
        title: 'Painel Administrativo',
        body: {}
        });
});

router.post('/login', function(req, res, next) {
    if(!req.body.email){
        users.render(req, res, "Preencha o campo email");
    }else if(!req.body.password){
        users.render(req, res, "Preencha o campo senha");
    }else{
        users.login(req.body.email, req.body.password).then(user =>{
            req.session.user = user;
            res.redirect("/admin");
        }).catch(err=>{
            users.render(req, res, err.message || err);
        });
    }
});


router.get('/menus', function(req, res, next) {
    
    res.render('admin/menus', {
        title: 'Painel Administrativo'
        });
});

router.get('/reservations', function(req, res, next) {
    
    res.render('admin/contacts', {
        title: 'Painel Administrativo'
        });
});

router.get('/users', function(req, res, next) {
    
    res.render('admin/users', {
        title: 'Painel Administrativo'
        });
});

module.exports = router;
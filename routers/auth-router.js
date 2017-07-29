const express = require('express');
const passport = require('passport');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/auth-controller')(data, models, validation);

    const router = new express.Router();

    router
        .get('/login', controller.loadLoginPage)
        .get('/register', controller.loadRegisterPage)
        .post('/login',
            passport.authenticate('local', { failureRedirect: '/error' }),
            function(req, res) {
                res.redirect('/');
            })
        .post('/register', controller.register)
        .get('/profile', controller.getProfile)
        .get('/logout', controller.logout)
    app.use('/', router);
};

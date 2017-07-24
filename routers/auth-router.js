const express = require('express');
const passport = require('passport');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/auth-controller')(data, models, validation);

    const router = new express.Router();

    router
        .get('/login', controller.loadLoginPage)
        .get('/register', controller.loadRegisterPage)
    app.use('/', router);
};

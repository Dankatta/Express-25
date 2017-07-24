const express = require('express');

module.exports = function(app, data, models, validator) {
    const controller =
        require('../controller/home-controller')(data, models, validator);

    const router = new express.Router();

    router
        .get('/', controller.getHome);
    app.use('/', router);
};
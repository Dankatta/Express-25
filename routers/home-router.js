const express = require('express');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/home-controller')(data, models, validation);

    const router = new express.Router();

    router
        .get('/', controller.getHome)
        .get('/events', controller.getEvents)
        .get('/events', controller.getEvents)

    app.use('/', router);
};
const express = require('express');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/event-controller')(data, models, validation);

    const router = new express.Router();

    router
        .post('/add-event', controller.createEvent)
        .get('/events', controller.getEvents)
    app.use('/', router);
};
const express = require('express');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/reservation-controller')(data, models, validation);

    const router = new express.Router();

    router
        .post('/reservation', controller.createReservation)
        .get('/reservation',controller.getReservation)
    app.use('/', router);
};
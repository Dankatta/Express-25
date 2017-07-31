module.exports = function(data, models, validation) {
    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user;
        }
        return result;
    }
    return {
        createReservation(req, res) {
            const result = isAuth(req, {});
            const reservation = models.getReservation(
                req.body.people,
                req.body.place,
                req.body.time,
                req.body.name,
                req.body.number,
                req.body.date

            );

            global.io.emit('new-reservation', reservation);

            data.createReservation(reservation)
                .then(() => {
                    res.json({ success: 'Reservation successfull' });
                })
                .catch(() => {
                    // TODO: redirect to another page
                    res.json({ error: 'Add reservation failed' });
                    res.status(500).end();
                });
            res.redirect('/reservation');
        },
        getReservation(req, res) {
            const result = isAuth(req, {});
            data.getReservations()
                .then((reservations)=>{
                    res.render('home/reservation.pug',{ reservations,result });
                })
        },
    };
};
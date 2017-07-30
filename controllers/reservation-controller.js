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
            const reservation = models.getReservations(
                req.body.people,
                req.body.place,
                req.body.time
            );

            data.createReservation(reservation)
                .then(() => {
                    res.json({ success: 'Reservation successfull' });
                })
                .catch(() => {
                    // TODO: redirect to another page
                    res.json({ error: 'Add reservation failed' });
                    res.status(500).end();
                });
            res.redirect('/');
        },
        getReservation(req, res) {
            const result = isAuth(req, {});
            data.getReservations()
                .then((reservations)=>{
                    res.render('home/events.pug',{ reservations,result });
                })
        },
    };
};
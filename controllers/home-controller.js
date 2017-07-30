module.exports = function(data, models, validation) {
    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user;
        }
        return result;
    }
    return {
        getHome(req, res) {
            const result = isAuth(req, {});

            res.render('home/home.pug', { result });
        },
        getReservation(req, res) {
            const result = isAuth(req, {});
            res.render('home/reservation.pug', { result });
        },
        
    };
};
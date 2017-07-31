module.exports = function(data, models, validation) {
    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user;
        }
        return result;
    }
    return {
        createEvent(req, res) {
            const result = isAuth(req, {});
            const event = models.getEvent(
                req.body.title,
                req.body.place,
                req.body.time,
                req.body.description,
                req.body.date
            );

            data.createEvent(event)
                .then(() => {
                    res.json({ success: 'successfull' });
                })
                .catch(() => {
                    // TODO: redirect to another page
                    res.json({ error: 'Add event failed' });
                    res.status(500).end();
                });
            res.redirect('/');
        },
        getEvents(req,res){
            const result = isAuth(req, {});
            data.getEvents()
            .then((events)=>{
                res.render('home/events.pug',{ events,result });
            })
        },
    };
};
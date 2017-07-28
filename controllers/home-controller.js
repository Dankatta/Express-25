module.exports = function(data, models, validation) {
    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user.username;
        }
        return result;
    }
         return {
        getHome(req, res) {
            const result = isAuth(req, {});

            res.render('home/home.pug', { result });
        },
        getEvents(req,res){
            data.getEvents()
            .then((result)=>{
                res.render('home/events.pug',{result});
            })
        },
    };
};
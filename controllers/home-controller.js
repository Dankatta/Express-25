module.exports = function(data, models, validation) {
    function init(req, result) {
        function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user.username;
        }
        return result;
    }
    }
         return {
        getHome(req, res) {
            const result = init(req, {});

            res.render('home/home.pug', { result });
        },
        getEvents(req,res){
            data.getEvents()
            .then((result)=>{
            console.log(result);
            res.render('home/events.pug',{result})});
        },
    };
};
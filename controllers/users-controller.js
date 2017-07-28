module.exports = function(data, models, validation) {
    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user.username;
        }
        return result;
    }
    return {
             
        getUserbyId(req, res) {
            const result = isAuth(req, {});
            const id=req.params.id;
            data.findUserById(id)
            .then((user)=>
            res.render('user/user.pug', { user , result}));
            
        },
        getUsers(req,res) {
            const result = isAuth(req, {});
            data.getUsers()
            .then((users)=>
            res.render('user/users.pug',{users, result}));
        },
    };
};
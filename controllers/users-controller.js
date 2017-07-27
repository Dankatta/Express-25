module.exports = function(data, models, validation) {

         return {
             
        getUserbyId(req, res) {
            const id=req.params.id;
            data.findUserById(id)
            .then((user)=>
            res.render('user/user.pug', { user }));
            
        },
        getUsers(req,res) {
            data.getUsers()
            .then((users)=>
            res.render('user/users.pug',{users}));
        },
    };
};
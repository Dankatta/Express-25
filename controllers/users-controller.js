module.exports = function(data, models, validation) {

         return {
             
          getUserbyId(req, res) {

            const result = isAuth(req,{})
            const id=req.params;
            data.findUserById(id.id)
            .then((user)=>{
                console.log(user);
            res.render('user/user', { user });
            })
        },
        getUsers(req,res){
            data.getUsers()
            .then((users)=>
            res.render('user/users.pug',{users}));
        },
    };
};
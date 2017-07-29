const {SHA256} = require('crypto-js');
module.exports = function(data, models, validation) {

    function isAuth(req, result){
        if (req.isAuthenticated()) {
            result.user = req.user.username;
        }
        return result;
    }
    return {
        loadRegisterPage(req, res) {
            const result = isAuth(req, {});
            return res.status(200).render('auth/register-view', { result });
        },
        loadLoginPage(req, res) {
            const result = isAuth(req, {});
            return res.status(200).render('auth/login-view', { result });
        },
        register(req, res) {
            const user = models.takeUser(
                req.body.username,
                SHA256(req.body.password).toString(),
                req.body.firstname,
                req.body.lastname,
                req.body.email
        );

            data.createUser(user)
                .then(() => {
                    res.json({ success: 'Registration successfull' });
                })
                .catch(() => {
                    // TODO: redirect to another page
                    res.json({ error: 'Registration failed' });
                    res.status(500).end();
                });
            res.redirect('/login');
        },
        getProfile(req, res) {
            if (!req.isAuthenticated()) {
                res.redirect('/unauthorized');
            }

            const result = isAuth(req, {});
            result.title = 'Профил';

            data.getUsers({ username: result.user })
                .then((users) => {
                    const user = users[0];
                    result.firstName = user._firstName;
                    result.lastName = user._lastName;
                    res.render('auth/profile-view', { result });

                });
        },
        logout(req, res) {
            req.logout();
            res.status(200).redirect('/');
        },
    };
};
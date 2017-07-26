module.exports = function(data, models, validation) {
    return {
        loadRegisterPage(req, res) {
            return res.status(200).render('auth/register-view', { result: {} });
        },
        loadLoginPage(req, res) {
            return res.status(200).render('auth/login-view', { result: {} });
        },
        register(req, res) {
            const user = models.takeUser(
                req.body.username,
                req.body.password,
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
        logout(req, res) {
            req.logout();
            res.status(200).redirect('/');
        },
    };
};
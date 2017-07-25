module.exports = function(data, models, validator) {
    return {
        loadRegisterPage(req, res) {
            return res.status(200).render('auth/register-view', { result: {} });
        },
        loadLoginPage(req, res) {
            return res.status(200).render('auth/login-view', { result: {} });
        },
    };
};
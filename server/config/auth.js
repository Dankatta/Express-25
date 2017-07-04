module.exports = {
    isAuthenticated : (req, res, next) => {
        if (isAuthenticated()) {
            next();
        }
        else {
            req.redirect('/auth/login');
        }
    },
    isInRole: (role) =>
        (req, res, next) => {
            if (req.user && req.user.roles.indexOf(role) > -1) {
                next();
            } else {
                res.status(401).redirect('/home/error');
            }
        }
}

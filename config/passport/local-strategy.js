const LocalStrategy = require('passport-local');

module.exports = (passport, data) => {

    const authStrategy = new LocalStrategy((username, password, done) => {
        data.findUserByCredentials(username, password)
            .then((user) => {
                if (user) {
                    return done(null, user);
                }

                return done(null, false);
            })
            .catch((error) => done(error, null));
    });

    passport.use(authStrategy);
}
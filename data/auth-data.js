module.exports = function(repository, models) {
    return {
        findUserById(id) {
            return repository.findOne('users', id);
        },
        findUserByCredentials(username, password) {
            const searchedUser = models.getBaseUser(username, password);

            return repository.findOne('users', searchedUser);
        },
        createUser(user) {
            return new Promise((resolve, reject) => {
                // if (!validator.isValidUser(user)) {
                //     return reject({ error: 'Invalid information' });
                // }

                    if (err) {
                        return reject(err);
                    }

                    return repository.add('users', user);
            });
        },
        getUsers() {
            return repository.find('users', {});
        },
    };
};

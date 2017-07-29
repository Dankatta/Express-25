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
            return repository.add('users', user);
        },
        getUsers(filter) {
            return repository.find('users', filter);
        },
        updateUser(filter) {
            return repository.update('users', filter);
        },

        getDoctor(filter) {
            return repository.findOne('users', filter);
        },
        findUser(filter) {
            return repository.findOne('users', filter);
        },
    };
};

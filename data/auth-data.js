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
        getUsers() {
            return repository.find('users', {});
        },
    };
};

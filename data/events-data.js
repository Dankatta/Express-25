module.exports = function(repository, models) {
    return {
        getEvents() {
            return repository.find('events', {});
        },
    };
};

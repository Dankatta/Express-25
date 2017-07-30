module.exports = function(repository, models) {
    return {
        getEvents() {
            return repository.find('events', {});
        },
        createEvent(event) {
            return repository.add('events', event);
        },
    };
};

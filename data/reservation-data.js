module.exports = function(repository, models) {
    return {
        getReservations() {
            return repository.find('reservations', {});
        },
        createReservation(reservation) {
            return repository.add('reservations', reservation);
        },
    };
};

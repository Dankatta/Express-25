module.exports = function() {
    class Reservation {
        constructor(people, place, time) {
            this.people = people;
            this.place = place;
            this.time = time;

        }

        get people() {
            return this._people;
        }

        set people(value) {
            this._people = value;
        }

        get place() {
            return this._place;
        }

        set place(value) {
            this._place = value;
        }

        get time() {
            return this._time;
        }

        set time(value) {
            this._time = value;
        }

    }

    return {
        getReservation(people, place, time) {
            return new Reservation(people, place, time);
        },
    };
};

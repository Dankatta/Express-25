module.exports = function() {
    class Reservation {
        constructor(people, place, time,name,number) {
            this.people = people;
            this.place = place;
            this.time = time;
            this.number= number;
            this.name=name;

        }

        get people() {
            return this._people;
        }

        set people(value) {
            this._people = value;
        }
        get number() {
            return this._number;
        }

        set number(value) {
            this._number = value;
        }
        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
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
        getReservation(people, place, time,name,number) {
            return new Reservation(people, place, time,name,number);
        },
    };
};

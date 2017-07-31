module.exports = function() {
    class Reservation {
        constructor(people, place, time,name,number,date) {
            this.date=date;
            this.people = people;
            this.place = place;
            this.time = time;
            this.number= number;
            this.name=name;

        }
        get date() {
            return this._date;
        }

        set date(value) {
            this._date = value;
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
        getReservation(people, place, time,name,number,date) {
            return new Reservation(people, place, time,name,number,date);
        },
    };
};

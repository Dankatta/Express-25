module.exports = function() {
    class Event {
        constructor(title, place, time, description,date) {
            this.title = title;
            this.place = place;
            this.time = time;
            this.description = description;
            this.date=date;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            this._title = value;
        }
        get date() {
            return this._date;
        }

        set date(value) {
            this._date = value;
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

        get description() {
            return this._description;
        }

        set description(value) {
            this._description = value;
        }
    }

    return {
        getEvent(title, place, time, description,date) {
            return new Event(title, place, time, description,date);
        },
    };
};

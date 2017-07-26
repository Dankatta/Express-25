module.exports = function(constants, validator) {
    class BaseUser {
        constructor(user, pass) {
            this.user = user;
            this.pass = pass;
        }

        get user() {
            return this.username;
        }

        set user(value) {
            validator.validateStringLength(value,
                constants.MIN_USERNAME_LENGTH, constants.MAX_USERNAME_LENGTH);

            this.username = value.trim();
        }

        get pass() {
            return this.password;
        }

        set pass(value) {
            validator.validateStringLength(value,
                constants.MIN_PASSWORD_LENGTH, constants.MAX_PASSWORD_LENGTH);

            this.password = value.trim().toString();
        }
    }

    class User extends BaseUser {
        constructor(user, pass, firstname, lastname, email) {
            super(user, pass);
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
        }

        get firstname() {
            return this._firstname;
        }

        set firstname(value) {
            this._firstname = value;
        }

        get lastname() {
            return this._lastname;
        }

        set lastname(value) {
            this._lastname = value;
        }

        get email() {
            return this._email;
        }

        set email(value) {
            this._email = value;
        }
    }

    return {
        getBaseUser(user, pass) {
            return new BaseUser(user, pass);
        },
        takeUser(user, pass, firstname, lastname, email) {
            return new User(user, pass, firstname, lastname, email);
        },
    };
};

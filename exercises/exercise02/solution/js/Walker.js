'use strict';

function Walker(name = 'John Doe', state = 'dead') {
    this.name = name;
    this.state = state;
    Object.defineProperties(this, {
        firstName: {
            get() {
                return this.name.split(' ')[0];
            },
            set(firstName) {
                const firstAndLastName = this.name.split(' ');
                this.name = `${firstName} ${firstAndLastName[1]}`;
            }
        },
        lastName: {
            get() {
                return this.name.split(' ')[1];
            },
            set(lastName) {
                const firstAndLastName = this.name.split(' ');
                this.name = `${firstAndLastName[0]} ${lastName}}`;
            },
        }
    });
}

Walker.prototype = {
    walk(speedInMph = 10) {
        return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
    },
    eat(foodName = 'meat') {
        return `${this.name} the ${this.state} eats ${foodName}!`;
    },
    speak(sound = 'grrrrr') {
        return `${this.name} the ${this.state} says ${sound}!`;
    }
}
Walker.prototype.constructor = Walker;

export default Walker;
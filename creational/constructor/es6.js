
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

const human = new Human('Valeriy', 'Siestov');

console.log('Human says its name: ', human.sayName(), 'Human object:', human, 'Check prototype:', human.sayName === Human.prototype.sayName);
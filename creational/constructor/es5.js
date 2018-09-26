function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayName = function () {
    return 'My name is ' + this.firstName + ' ' + this.lastName;
};

var person = new Person('Valeriy', 'Siestov');

console.log('Person says its name: ', person.sayName(), 'Person object:', person, 'Check prototype:', person.sayName === Person.prototype.sayName);

class Command {
    constructor(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
}

const array = {
    push: (list, item) => {
        return [...list, item];
    },

    pop: (list) => {
        return list.slice(0, -1);
    }
};

class addItem extends Command {
    constructor(params) {
        super(array.push, array.pop, params);
    }
}

class ShoppingCart {
    constructor() {
        this.steps = [];
        this.value = [];
    }

    execute(command) {
        this.value = command.execute(this.value, command.value);
        this.steps.push(command);
    }

    undo() {
        const command = this.steps.pop();

        this.value = command.undo(this.value);
    }

    getCurrentValue() {
        return this.value;
    }
}

const shoppingCart = new ShoppingCart();

shoppingCart.execute(new addItem({
    title: 'Tie',
    price: 5
}));

shoppingCart.execute(new addItem({
    title: 'T-Shirt',
    price: 15
}));

shoppingCart.execute(new addItem({
    title: 'Socks',
    price: 3
}));

console.log('Current shopping cart list', shoppingCart.getCurrentValue());

shoppingCart.undo();

console.log('New shopping cart list', shoppingCart.getCurrentValue());

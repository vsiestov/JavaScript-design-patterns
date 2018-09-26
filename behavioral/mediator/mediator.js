const mediator = (() => {
    const channels = {
    };

    const subscribe = (channel, context, func) => {
        if (!channels[channel]) {
            channels[channel] = [];
        }

        channels[channel].push({
            context,
            func
        });
    };

    const publish = (channel, ...args) => {
        if (!channels[channel]) {
            return;
        }

        const list = channels[channel];
        const count = list.length;

        for (let i = 0; i < count; i++) {
            list[i].func.apply(list[i].context, args);
        }
    };

    return {
        subscribe,
        publish
    };
})();

class Task {
    constructor(title) {
        this.title = title;
    }

    greet() {
        console.log(this.message || 'default message');
    }

    output(message) {
        this.message = message;
        this.greet();
    }
}

const task = new Task('Create a mediator');

mediator.subscribe('greet', task, task.greet);
mediator.subscribe('output', task, task.output);

mediator.publish('greet');
mediator.publish('output', 'Hello');
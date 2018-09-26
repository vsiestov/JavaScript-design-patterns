class Task {
    static isValid({title, assignee, reporter}) {
        if (!title) {
            return {
                result: false,
                message: `Title is required parameter`
            };
        }

        if (!assignee) {
            return {
                result: false,
                message: `Assignee is required parameter`
            };
        }

        if (!reporter) {
            return {
                result: false,
                message: `Reporter is required parameter`
            };
        }

        return {
            result: true
        };
    }

    constructor({title, description, priority, assignee, reporter}) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.assignee = assignee;
        this.reporter = reporter;
    }
}

class Sprint {
    static isValid({title, dateStart, dateEnd}) {
        if (!title) {
            return {
                result: false,
                message: `Title is required parameter`
            };
        }

        if (!dateStart) {
            return {
                result: false,
                message: `Assignee is required parameter`
            };
        }

        if (!dateEnd) {
            return {
                result: false,
                message: `Reporter is required parameter`
            };
        }

        return {
            result: true
        };
    }

    constructor({title, description, dateStart, dateEnd}) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}

const factory = (() => {

    const createTask = (params) => {
        const isValid = Task.isValid(params);

        if (!isValid.result) {
            throw new Error(isValid.message);
        }

        return new Task(params);
    };

    const createSprint = (params) => {
        const isValid = Sprint.isValid(params);

        if (!isValid.result) {
            throw new Error(isValid.message);
        }

        return new Sprint(params);
    };

    const createEntity = ({type, obj}) => {
        if (!type) {
            throw new Error('Undefined type of entity');
        }

        switch (type) {
        case 'task':
            return createTask(obj);

        case 'sprint':
            return createSprint(obj);

        default:
            throw new Error(`Unknown type of entity`)
        }
    }

    return {
        createEntity
    };
})();

const task = factory.createEntity({
    type: 'task',
    obj: {
        title: 'Taks #1',
        assignee: 'Valeriy',
        reporter: 'Valeriy'
    }
});

console.dir(task);

try {
    factory.createEntity({
        type: 'task',
        obj: {
            title: 'Taks #1'
        }
    });
} catch (error) {
    console.log(error instanceof Error, error);
}

const sprint = factory.createEntity({
    type: 'sprint',
    obj: {
        title: 'Sprint #1',
        dateStart: new Date(),
        dateEnd: new Date()
    }
});

console.dir(sprint);
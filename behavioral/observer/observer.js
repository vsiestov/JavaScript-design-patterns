/**
 * This class contains the list of observers and provides basic functionality to manage this list
 */
class ObserverList {
    constructor() {
        this.list = [];
    }

    add(obj) {
        this.list.push(obj);
    }

    count() {
        return this.list.length;
    }

    indexOf(obj) {
        const list = this.list;
        const count = list.length;

        for (let i = 0; i < count; i++) {
            if (list[i] === obj) {
                return i;
            }
        }

        return -1;
    }

    get(index) {
        return this.list[index];
    }

    removeAt(index) {
        this.list.splice(index, 1);
    }
}

/**
 * This class manages observers and notifications
 */
class Subject {
    constructor() {
        this.list = new ObserverList();
    }

    addObserver(observer) {
        this.list.add(observer);
    }

    removeObserver(observer) {
        this.list.removeAt(this.list.indexOf(observer));
    }

    notify(context) {
        const list = this.list;
        const count = list.count();

        for (let i = 0; i < count; i++) {
            list.get(i).update(context);
        }
    }
}

/**
 * Additional object to provide update functionality when subject fires notification events
 */
class Observer {
    update() {
        console.log('Default update method that must be overwritten');
    }
}

// Examples of usage

const subject = new Subject();
const observer = new Observer();

subject.addObserver(observer);
subject.notify('Hello observers');
subject.removeObserver(observer);
subject.notify('This message will not be visible because this subject does not have any observers now');
subject.addObserver(observer);

// Owerwrite default update method
observer.update = (context) => {
    console.log(context);
};

subject.notify('And this message will be visible');
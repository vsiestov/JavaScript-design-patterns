const tasks = (function () {
    const list = {};

    const add = function (key, params) {
        list[key] = params;
    };

    const getAll = function () {
        return Object.values(list);
    };

    const get = function (key) {
        return list[key];
    };

    const put = function (key, params) {
        list[key] = params;
    };

    return {
        add,
        getAll,
        get,
        put
    };
}());

tasks.add('one', {
    title: 'Code'
});

tasks.add('two', {
    title: 'Eat'
});

tasks.add('three', {
    title: 'Sleep'
});

tasks.put('three', {
    title: 'Repeat'
});

console.log('All tasks', tasks.getAll());
console.log('Task with "One" key', tasks.get('one'));
console.log('Updated task', tasks.get('three'));
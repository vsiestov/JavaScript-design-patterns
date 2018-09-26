
const pubsub = (function () {
    const keys = {
    };

    function publish(key, ...args) {
        const list = keys[key];

        if (!list) {
            return;
        }

        const count = list.length;

        for (let i = 0; i < count; i++) {
            list[i].handler(...args);
        }
    }

    function subscribe(key, handler) {
        if (!keys[key]) {
            keys[key] = [];
        }

        const obj = {
            key,
            handler
        };

        keys[key].push(obj);
        
        return obj;
    }

    function unsubscribe(obj) {
        for (const key in keys) {
            if (keys.hasOwnProperty(key)) {
                const list = keys[key];
                const index = list.indexOf(obj);

                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
        }
    }

    return {
        subscribe,
        publish,
        unsubscribe
    };

}());

const sub1 = pubsub.subscribe('message', (a, b) => {
    console.log('Subscribe 1:', a, b);
});

const sub2 = pubsub.subscribe('message', (...params) => {
    console.log('Subscribe 2:', params);
});

pubsub.publish('message', 1, 2);

pubsub.unsubscribe(sub1);

pubsub.publish('message', 3, 4);
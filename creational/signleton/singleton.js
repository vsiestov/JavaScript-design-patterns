/**
 * This script can be run in browser and served by something like http-server (npm install http-server)
 */

const singleton = (function () {
    let instance;

    class Service {
        constructor() {
            this.url = 'https://jsonplaceholder.typicode.com/users';
            this.headers = new Headers()

            this.headers.append('Content-Type', 'application/json');
        }

        find() {
            return fetch(this.url, {
                method: 'GET',
                headers: this.headers
            })
                .then((response) => {
                    return response.json();
                });
        }
    }

    return {
        getInstance: function () {
            return instance || (instance = new Service());
        }
    }
})();

const service = singleton.getInstance();
const service2 = singleton.getInstance();

console.log('Compare instances methods', service2.find === service.find);

service.find()
    .then((response) => {
        console.log('response', response);
    })
    .catch((error) => {
        console.error('error', error);
    });
const literalModule = {
    config: {
        env: 'production',
        api: '/api'
    },

    create: function (params) {
        console.log(`Create an entity. Send POST requrest to ${this.config.api} in "${this.config.env}" mode`);
    },

    update: function (params) {
        console.log(`Update an entity. Send POST requrest to ${this.config.api} in "${this.config.env}" mode`);
    }
};

console.log(literalModule.create());
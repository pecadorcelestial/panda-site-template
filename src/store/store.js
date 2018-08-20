const store = {
    user: {
        name: '',
        lastName: '',
        permissions: [
            {
                module: '',
                get: true,
                post: false,
                delete: false
            }
        ]
    },
    clients: {
        client: {
            contact: {},
            billing: {},
            services: []
        },
        list: []
    }
};

export default store;
const store = {
    site: {
        section: {
            title: ''
        },
        page: {
            title: '',
            description: ''
        },
    },
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
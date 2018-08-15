import store from '../store/store';

import * as Clients from 'actions/clients';

const clients = (state = store.clients, action) => {
    switch(action.type) {
        case Clients.CLIENTS_CLIENT:
            return Object.assign({}, state, {
                client: action.value
            });
        case Clients.CLIENTS_LIST:
            return Object.assign({}, state, {
                list: action.value
            });
        default:
            return state;
    }
};

export default clients;
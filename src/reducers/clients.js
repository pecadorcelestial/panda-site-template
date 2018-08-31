import { combineReducers } from 'redux';
import store from '../store/store';

import * as Clients from 'actions/clients';

const client = (state = store.clients.client, action) => {
    switch(action.type) {
        case Clients.CLIENT_INFO:
            return Object.assign({}, state.client, {
                info: action.value
            });
        default:
            return state;
    }
};

const list = (state = store.clients.list, action) => {
    switch(action.type) {
        case Clients.CLIENTS_LIST:
            return Object.assign([], state, action.value);
        default:
            return state;
    }
};

export default combineReducers({
	client,
	list
});
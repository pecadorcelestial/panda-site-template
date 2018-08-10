import store from '../store/store';

import * as User from '../actions/user';

const user = (state = store.user, action) => {
    switch(action.type) {
        case User.USER_NAME:
            return Object.assign({}, state, {
                name: action.value
            });
        case User.USER_LAST_NAME:
            return Object.assign({}, state, {
                lastName: action.value
            });
        case User.USER_PERMISSIONS:
            return Object.assign({}, state, {
                permissions: action.value
            });	
        default:
            return state;
    }
};

export default user;
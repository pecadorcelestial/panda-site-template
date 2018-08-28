import { combineReducers } from 'redux';
import store from '../store/store';

import * as Site from 'actions/site';

const section = (state = store.site.section, action) => {
    switch(action.type) {
        case Site.SECTION_TITLE:
            return Object.assign({}, state, {
                title: action.value
            });
        default:
            return state;
    }
};

const page = (state = store.site.page, action) => {
    switch(action.type) {
        case Site.PAGE_TITLE:
            return Object.assign({}, state, {
                title: action.value
            });
        case Site.PAGE_DESCRIPTION:
            return Object.assign({}, state, {
                description: action.value
            });
        default:
            return state;
    }
};

export default combineReducers({
	section,
	page
})
//Módulos generales.
import { combineReducers } from 'redux';

//Store.
import store from '../store/store';

//Acciones.
import * as Actions from 'actions/actions';

//Reductores.
import site from './site';
import user from './user';
import clients from './clients';

//Reductor combinado.
const AppReducers = combineReducers({ site, user, clients });

//Reductor.
const Reducers = (state = store, action) => {
    switch(action.type) {
        case Actions.INITIALIZE_STORE:
            state = Object.assign({}, state, {
                site: action.value.site,
                user: action.value.user,
                clients: action.value.clients
            });
            break;
    }
    return AppReducers(state, action);
};
export default Reducers;
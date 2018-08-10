import { combineReducers } from 'redux';

import user from './user';
import clients from './clients';

const Reducers = combineReducers({ user, clients });
export default Reducers;
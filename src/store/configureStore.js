import { createStore } from 'redux';
import Reducers from 'reducers/reducers';

const configureStore = () => {
    if(process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('reducers/reducers', () => {
            //const nextRootReducer = combineReducers({ Reducers });
            store.replaceReducer(require('reducers/reducers').default);
        });
    }
    const store = createStore(Reducers);
    return store;
}

export default configureStore;